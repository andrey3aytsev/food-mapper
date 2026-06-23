import type { User } from '../models/user.js';

export type AuthResponse = {
  user: User;
  token: string;
};
