const TOKEN_STORAGE_KEY = 'food-mapper.auth.token';

export const authStorage = {
  getToken(): string | null {
    return sessionStorage.getItem(TOKEN_STORAGE_KEY);
  },

  setToken(token: string): void {
    sessionStorage.setItem(TOKEN_STORAGE_KEY, token);
  },

  clearToken(): void {
    sessionStorage.removeItem(TOKEN_STORAGE_KEY);
  },
};
