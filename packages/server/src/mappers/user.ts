import type { User } from '@food-mapper/shared';

import { fromIsoString, toIsoString } from './datetime.js';

export type UserRow = {
  id: string;
  email: string;
  password_hash: string;
  created_at: Date;
};

export type UserPersistInput = User & {
  passwordHash: string;
};

export const toRow = (user: UserPersistInput): UserRow => {
  return {
    id: user.id,
    email: user.email,
    password_hash: user.passwordHash,
    created_at: fromIsoString(user.createdAt),
  };
};

export const fromRow = (row: UserRow): User => {
  return {
    id: row.id,
    email: row.email,
    createdAt: toIsoString(row.created_at),
  };
};
