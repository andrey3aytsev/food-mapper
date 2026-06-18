import { authApiPaths } from '@food-mapper/shared';
import { Router } from 'express';

import { HttpError } from '../errors/index.js';
import { register } from '../services/auth.js';

export const authRouter = Router();

authRouter.post(authApiPaths.register, async (req, res, next) => {
  try {
    const result = await register(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

authRouter.post(authApiPaths.login, (_req, _res, next) => {
  next(new HttpError(501, 'not_implemented', 'Login is not implemented yet'));
});

authRouter.post(authApiPaths.logout, (_req, res) => {
  res.status(204).send();
});
