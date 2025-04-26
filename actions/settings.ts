'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { SettingsSchema } from '@/schemas';
import { getUserByEmail, getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }

  if (!user.id) {
    return { error: 'User ID is undefined' };
  }
  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: 'Unauthorized' };
  }

  //if user isOAuth then user can not update the below properties as they are handled by provider
  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.password = undefined;
    values.newPassword = undefined;
    values.isTwoFactorEnabled = undefined;
  }
  //user is updating credentials
  if (values.email && values.email !== user.email) {
    const exisitngUser = await getUserByEmail(values.email);
    if (exisitngUser && exisitngUser.id !== user.id) {
      return { error: 'Email already in use!' };
    }

    const verificationToken = await generateVerificationToken(values.email);

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return { success: 'Verification email sent!' };
  }

  if (values.password && values.newPassword && dbUser.password) {
    const passwordsMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );
    if (!passwordsMatch) {
      return { error: 'Incorrect password' };
    }
    const hashedPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashedPassword;
    //we do not have newPassword field in the database so we do not update it
    values.newPassword = undefined;
  }
  await db.user.update({
    where: { id: dbUser.id },
    data: { ...values },
  });
  return { success: 'Settings updated' };
};
