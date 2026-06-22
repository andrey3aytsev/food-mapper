import type { ApiErrorResponse } from '@food-mapper/shared';

export class ApiError extends Error {
  readonly status: number;
  readonly error: string;
  readonly details?: unknown;

  constructor(status: number, body: ApiErrorResponse) {
    super(body.message ?? body.error);
    this.name = 'ApiError';
    this.status = status;
    this.error = body.error;
    this.details = body.details;
  }
}
