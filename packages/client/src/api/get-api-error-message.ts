import { ApiError } from './api-error.js';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again.';

export const getApiErrorMessage = (error: unknown): string | null => {
  if (error == null) {
    return null;
  }

  if (error instanceof ApiError) {
    return error.message;
  }

  return DEFAULT_ERROR_MESSAGE;
};
