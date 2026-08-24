import {
  loginRequestSchema,
  registerRequestSchema,
  type AuthResponse,
  type User,
} from '@food-mapper/shared';
import type { DatabaseError } from 'pg';

import { HttpError } from '../errors/index.js';
import { parseRequest } from '../validation/index.js';
import { userFromRow } from '../mappers/index.js';
import { withTransaction } from '../db.js';
import {
  createUser,
  findUserByEmail,
  findUserById,
} from '../repositories/user.js';
import { createDefaultUserSettings } from '../repositories/user-settings.js';
import { hashPassword, verifyLoginPassword } from './password.js';
import { signToken } from './jwt.js';

const isUniqueViolation = (err: unknown): err is DatabaseError => {
  return (
    typeof err === 'object' &&
    err !== null &&
    'code' in err &&
    err.code === '23505'
  );
};

export const register = async (body: unknown): Promise<AuthResponse> => {
  const { email, password } = parseRequest(registerRequestSchema, body);

  const passwordHash = await hashPassword(password);

  try {
    const user = await withTransaction(async (client) => {
      const createdUser = await createUser({ email, passwordHash }, client);
      await createDefaultUserSettings(createdUser.id, client);
      return createdUser;
    });
    const token = signToken(user.id);

    return { user, token };
  } catch (err) {
    if (isUniqueViolation(err)) {
      throw new HttpError(409, 'email_taken', 'Email is already registered');
    }

    throw err;
  }
};

export const login = async (body: unknown): Promise<AuthResponse> => {
  const { email, password } = parseRequest(loginRequestSchema, body);

  const row = await findUserByEmail(email);
  const passwordValid = await verifyLoginPassword(password, row?.password_hash);

  if (row === null || !passwordValid) {
    throw new HttpError(
      401,
      'invalid_credentials',
      'Invalid email or password',
    );
  }

  const user = userFromRow(row);
  await createDefaultUserSettings(user.id);
  const token = signToken(user.id);

  return { user, token };
};

export const getCurrentUser = async (userId: string): Promise<User> => {
  const user = await findUserById(userId);

  if (user === null) {
    throw new HttpError(401, 'unauthorized', 'Invalid or expired token');
  }

  return user;
};
