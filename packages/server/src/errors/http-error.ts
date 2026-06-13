export class HttpError extends Error {
  readonly statusCode: number;
  readonly error: string;
  readonly details?: unknown;

  constructor(
    statusCode: number,
    error: string,
    message?: string,
    details?: unknown,
  ) {
    super(message ?? error);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.error = error;
    this.details = details;
  }
}
