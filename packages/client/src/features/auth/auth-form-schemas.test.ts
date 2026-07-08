import { describe, expect, it } from 'vitest';

import { registerFormSchema } from './auth-form-schemas.js';

describe('registerFormSchema', () => {
  it('passes when password and confirmPassword match', () => {
    expect(
      registerFormSchema.safeParse({
        email: 'user@mail.com',
        password: 'secret12',
        confirmPassword: 'secret12',
      }),
    ).toMatchObject({
      success: true,
      data: {
        email: 'user@mail.com',
        password: 'secret12',
        confirmPassword: 'secret12',
      },
    });
  });

  it('returns "Passwords do not match" on confirmPassword when passwords differ', () => {
    expect(
      registerFormSchema.safeParse({
        email: 'user@mail.com',
        password: 'secret12',
        confirmPassword: 'different',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [
          {
            message: 'Passwords do not match',
            path: ['confirmPassword'],
          },
        ],
      },
    });
  });
});
