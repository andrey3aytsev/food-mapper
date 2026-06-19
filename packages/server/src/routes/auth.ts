import { authApiPaths } from '@food-mapper/shared';
import { Router } from 'express';

import { login, register } from '../services/auth.js';

export const authRouter = Router();

authRouter.post(authApiPaths.register, async (req, res, next) => {
  try {
    const result = await register(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

authRouter.post(authApiPaths.login, async (req, res, next) => {
  try {
    const result = await login(req.body);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

authRouter.post(authApiPaths.logout, (_req, res) => {
  res.status(204).send();
});
