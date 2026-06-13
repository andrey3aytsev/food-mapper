import type {} from 'express';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- official Express pattern
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}
