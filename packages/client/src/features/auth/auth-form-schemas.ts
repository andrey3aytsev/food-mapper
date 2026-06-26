import { loginRequestSchema, registerRequestSchema } from '@food-mapper/shared';
import { z } from 'zod';

export const loginFormSchema = loginRequestSchema;

export const registerFormSchema = registerRequestSchema
  .extend({
    confirmPassword: z
      .string()
      .trim()
      .min(1, 'Please confirm your password'),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    },
  );

export type LoginFormValues = z.infer<typeof loginFormSchema>;
export type RegisterFormValues = z.infer<typeof registerFormSchema>;
