import { authApiPaths } from '@food-mapper/shared';
import type { RequestHandler } from 'express';

import { HttpError } from '../errors/index.js';
import { verifyToken } from '../services/jwt.js';

const PUBLIC_API_PATHS = new Set<string>([
  authApiPaths.register,
  authApiPaths.login,
  authApiPaths.logout,
]);

const BEARER_PREFIX = 'Bearer ';

const extractBearerToken = (
  authHeader: string | undefined,
): string | undefined => {
  if (authHeader === undefined || !authHeader.startsWith(BEARER_PREFIX)) {
    return undefined;
  }

  const token = authHeader.slice(BEARER_PREFIX.length).trim();
  return token.length > 0 ? token : undefined;
};

export const requireAuth: RequestHandler = (req, _res, next) => {
  if (!req.path.startsWith('/api')) {
    next();
    return;
  }

  if (PUBLIC_API_PATHS.has(req.path)) {
    next();
    return;
  }

  const token = extractBearerToken(req.headers.authorization);

  if (token === undefined) {
    next(new HttpError(401, 'unauthorized', 'Authentication required'));
    return;
  }

  try {
    const payload = verifyToken(token);
    req.userId = payload.sub;
    next();
  } catch {
    next(new HttpError(401, 'unauthorized', 'Invalid or expired token'));
  }
};
