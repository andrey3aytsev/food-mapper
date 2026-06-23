import { z } from 'zod';

export const MIN_PASSWORD_LENGTH = 8;

const authEmailSchema = z
  .string({ error: 'Email is required' })
  .trim()
  .min(1, 'Email is required')
  .transform((email) => {
    return email.toLowerCase();
  })
  .pipe(z.email('Invalid email format'));

const loginPasswordSchema = z
  .string({ error: 'Password is required' })
  .transform((value) => {
    return value.trim();
  })
  .pipe(z.string().min(1, 'Password is required'));

const registerPasswordSchema = z
  .string({ error: 'Password is required' })
  .transform((value) => {
    return value.trim();
  })
  .pipe(
    z
      .string()
      .min(
        MIN_PASSWORD_LENGTH,
        `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
      ),
  );

export const loginRequestSchema = z.object({
  email: authEmailSchema,
  password: loginPasswordSchema,
});

export const registerRequestSchema = z.object({
  email: authEmailSchema,
  password: registerPasswordSchema,
});

export type LoginRequest = z.infer<typeof loginRequestSchema>;
export type RegisterRequest = z.infer<typeof registerRequestSchema>;
