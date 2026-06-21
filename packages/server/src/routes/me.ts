import { authApiPaths } from '@food-mapper/shared';
import { Router } from 'express';

import { HttpError } from '../errors/index.js';
import { getCurrentUser } from '../services/auth.js';

export const meRouter = Router();

meRouter.get(authApiPaths.me, async (req, res, next) => {
  try {
    const userId = req.userId;

    if (userId === undefined) {
      next(new HttpError(401, 'unauthorized', 'Authentication required'));
      return;
    }

    const user = await getCurrentUser(userId);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});
