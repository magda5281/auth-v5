import * as z from 'zod';
export const LoginSchema = z.object({
  email: z
    .string({ invalid_type_error: 'Must be a string' })
    .email({ message: 'Must be a valid email' }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});
