import type { ApiErrorResponse } from '@food-mapper/shared';

import { ApiError } from './api-error.js';
import { authStorage } from './auth-storage.js';
import { getApiBaseUrl } from './config.js';

export type ApiFetchOptions = Omit<RequestInit, 'body'> & {
  body?: unknown;
  auth?: boolean;
};

const parseResponseBody = async (response: Response): Promise<unknown> => {
  const text = await response.text();

  if (text.length === 0) {
    return undefined;
  }

  try {
    return JSON.parse(text) as unknown;
  } catch {
    throw new ApiError(response.status, {
      error: 'invalid_response',
      message: 'Response body is not valid JSON',
    });
  }
};

export const apiFetch = async <T>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> => {
  const { body, auth = true, headers: initHeaders, ...init } = options;
  const headers = new Headers(initHeaders);

  if (body !== undefined && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  if (auth) {
    const token = authStorage.getToken();

    if (token !== null) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    ...init,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (response.status === 204) {
    return undefined as T;
  }

  const payload = await parseResponseBody(response);

  if (!response.ok) {
    const errorBody = (payload ?? {
      error: 'unknown_error',
    }) as ApiErrorResponse;
    throw new ApiError(response.status, errorBody);
  }

  return payload as T;
};
