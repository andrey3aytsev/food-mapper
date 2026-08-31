import { symptomsApiPaths } from '@food-mapper/shared';
import { Router } from 'express';

import { HttpError } from '../errors/index.js';
import { createUserSymptom, listSymptoms } from '../services/symptoms.js';

export const symptomsRouter = Router();

symptomsRouter.get(symptomsApiPaths.symptoms, async (req, res, next) => {
  try {
    const userId = req.userId;

    if (userId === undefined) {
      next(new HttpError(401, 'unauthorized', 'Authentication required'));
      return;
    }

    const symptoms = await listSymptoms(userId);
    res.status(200).json(symptoms);
  } catch (err) {
    next(err);
  }
});

symptomsRouter.post(symptomsApiPaths.symptoms, async (req, res, next) => {
  try {
    const userId = req.userId;

    if (userId === undefined) {
      next(new HttpError(401, 'unauthorized', 'Authentication required'));
      return;
    }

    const symptom = await createUserSymptom(userId, req.body);
    res.status(201).json(symptom);
  } catch (err) {
    next(err);
  }
});
