import * as z from 'zod';

export const SettingsSchema = z.object({
  name: z.optional(z.string()),
});

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
