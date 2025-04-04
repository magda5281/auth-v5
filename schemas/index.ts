import { UserRole } from '@prisma/client';
import * as z from 'zod';

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().min(6, 'Password must be at least 6 characters').optional()
    ),

    newPassword: z.preprocess(
      (val) => (val === '' ? undefined : val),
      z.string().min(6, 'New password must be at least 6 characters').optional()
    ),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: 'New password is required!',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'Password is required!',
      path: ['password'],
    }
  );

export const ResetSchema = z.object({
  email: z
    .string({ invalid_type_error: 'Must be a string' })
    .email({ message: 'Must be a valid email' }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
});

export const LoginSchema = z.object({
  email: z
    .string({ invalid_type_error: 'Must be a string' })
    .email({ message: 'Must be a valid email' }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
});

export const RegisterSchema = z.object({
  email: z
    .string({ invalid_type_error: 'Must be a string' })
    .email({ message: 'Must be a valid email' }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters',
  }),
  name: z.string().min(1, { message: 'Name is required' }),
});
