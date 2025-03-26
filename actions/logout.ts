'use server';
import { signOut } from '@/auth';

//create logout server action if you need to do something on server while logging out user
export const logout = async () => {
  //do some server stuff before user is logged out if need to
  await signOut();
};
