import type { AuthResponse, RegisterRequest } from '@food-mapper/shared';
import type { DatabaseError } from 'pg';

import { HttpError } from '../errors/index.js';
import { createUser } from '../repositories/user.js';
import { hashPassword } from './password.js';
import { signToken } from './jwt.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

const isUniqueViolation = (err: unknown): err is DatabaseError =>
  typeof err === 'object' &&
  err !== null &&
  'code' in err &&
  err.code === '23505';

const parseRegisterRequest = (body: unknown): RegisterRequest => {
  if (typeof body !== 'object' || body === null) {
    throw new HttpError(
      400,
      'invalid_request',
      'Request body must be a JSON object',
    );
  }

  const { email, password } = body as Record<string, unknown>;

  if (typeof email !== 'string' || email.trim() === '') {
    throw new HttpError(400, 'invalid_request', 'Email is required');
  }

  if (typeof password !== 'string') {
    throw new HttpError(400, 'invalid_request', 'Password is required');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  if (!EMAIL_PATTERN.test(normalizedEmail)) {
    throw new HttpError(400, 'invalid_request', 'Invalid email format');
  }

  if (normalizedPassword === '') {
    throw new HttpError(400, 'invalid_request', 'Password is required');
  }

  if (normalizedPassword.length < MIN_PASSWORD_LENGTH) {
    throw new HttpError(
      400,
      'invalid_request',
      `Password must be at least ${MIN_PASSWORD_LENGTH} characters`,
    );
  }

  return { email: normalizedEmail, password: normalizedPassword };
};

export const register = async (body: unknown): Promise<AuthResponse> => {
  const { email, password } = parseRegisterRequest(body);

  const passwordHash = await hashPassword(password);

  try {
    const user = await createUser({ email, passwordHash });
    const token = signToken(user.id);

    return { user, token };
  } catch (err) {
    if (isUniqueViolation(err)) {
      throw new HttpError(409, 'email_taken', 'Email is already registered');
    }

    throw err;
  }
};
