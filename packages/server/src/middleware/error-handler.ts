import type { ApiErrorResponse } from '@food-mapper/shared';
import type { ErrorRequestHandler, RequestHandler } from 'express';

import { HttpError } from '../errors/index.js';

const toResponseBody = (err: HttpError): ApiErrorResponse => {
  const body: ApiErrorResponse = { error: err.error };

  if (err.message !== err.error) {
    body.message = err.message;
  }

  if (err.details !== undefined) {
    body.details = err.details;
  }

  return body;
};

export const notFoundHandler: RequestHandler = (_req, _res, next) => {
  next(new HttpError(404, 'not_found', 'Resource not found'));
};

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  if (err instanceof HttpError) {
    res.status(err.statusCode).json(toResponseBody(err));
    return;
  }

  if (err instanceof SyntaxError && 'body' in err) {
    const body: ApiErrorResponse = {
      error: 'invalid_json',
      message: 'Invalid JSON body',
    };
    res.status(400).json(body);
    return;
  }

  console.error(err);

  const body: ApiErrorResponse = {
    error: 'internal_server_error',
    message: 'An unexpected error occurred',
  };
  res.status(500).json(body);
};
