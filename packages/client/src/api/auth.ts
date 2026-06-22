import {
  authApiPaths,
  type AuthResponse,
  type LoginRequest,
  type RegisterRequest,
  type User,
} from '@food-mapper/shared';

import { authStorage } from './auth-storage.js';
import { apiFetch } from './client.js';

export const register = async (
  body: RegisterRequest,
): Promise<AuthResponse> => {
  return apiFetch<AuthResponse>(authApiPaths.register, {
    method: 'POST',
    body,
    auth: false,
  });
};

export const login = async (body: LoginRequest): Promise<AuthResponse> => {
  return apiFetch<AuthResponse>(authApiPaths.login, {
    method: 'POST',
    body,
    auth: false,
  });
};

export const logout = async (): Promise<void> => {
  try {
    await apiFetch<void>(authApiPaths.logout, { method: 'POST' });
  } finally {
    authStorage.clearToken();
  }
};

export const getMe = async (): Promise<User> => {
  return apiFetch<User>(authApiPaths.me);
};

export const saveAuthSession = (response: AuthResponse): void => {
  authStorage.setToken(response.token);
};

export const clearAuthSession = (): void => {
  authStorage.clearToken();
};
