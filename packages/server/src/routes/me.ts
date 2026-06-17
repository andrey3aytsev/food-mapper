import { authApiPaths } from '@food-mapper/shared';
import { Router } from 'express';

import { HttpError } from '../errors/index.js';

export const meRouter = Router();

meRouter.get(authApiPaths.me, (_req, _res, next) => {
  next(
    new HttpError(
      501,
      'not_implemented',
      'User profile is not implemented yet',
    ),
  );
});
