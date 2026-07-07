import { describe, expect, it } from 'vitest';

import { loginRequestSchema, registerRequestSchema } from './auth-schemas.js';

describe('loginRequestSchema', () => {
  it('normalizes email and password with surrounding whitespace', () => {
    expect(
      loginRequestSchema.safeParse({
        email: ' User@Mail.COM ',
        password: ' secret ',
      }),
    ).toMatchObject({
      success: true,
      data: {
        email: 'user@mail.com',
        password: 'secret',
      },
    });
  });

  it('returns "Email is required" for empty email', () => {
    expect(
      loginRequestSchema.safeParse({
        email: '',
        password: 'secret',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Email is required' }],
      },
    });
  });

  it('returns "Invalid email format" for invalid email', () => {
    expect(
      loginRequestSchema.safeParse({
        email: 'not-an-email',
        password: 'secret',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Invalid email format' }],
      },
    });
  });

  it('returns "Password is required" for empty password', () => {
    expect(
      loginRequestSchema.safeParse({
        email: 'user@mail.com',
        password: '',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Password is required' }],
      },
    });
  });
});

describe('registerRequestSchema', () => {
  it('normalizes email and password with surrounding whitespace', () => {
    expect(
      registerRequestSchema.safeParse({
        email: ' User@Mail.COM ',
        password: ' secret12 ',
      }),
    ).toMatchObject({
      success: true,
      data: {
        email: 'user@mail.com',
        password: 'secret12',
      },
    });
  });

  it('returns "Password must be at least 8 characters" for short password', () => {
    expect(
      registerRequestSchema.safeParse({
        email: 'user@mail.com',
        password: 'short',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Password must be at least 8 characters' }],
      },
    });
  });
});
