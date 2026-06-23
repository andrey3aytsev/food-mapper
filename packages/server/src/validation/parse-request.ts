import { ZodError } from 'zod';

import { HttpError } from '../errors/http-error.js';

type ParseSchema<T> = {
  parse: (body: unknown) => T;
};

export const parseRequest = <T>(schema: ParseSchema<T>, body: unknown): T => {
  try {
    return schema.parse(body);
  } catch (err) {
    if (err instanceof ZodError) {
      const message = err.issues[0]?.message ?? 'Invalid request';
      throw new HttpError(400, 'invalid_request', message, err.flatten());
    }

    throw err;
  }
};
