import {
  createSymptomRequestSchema,
  type CreateSymptomResponse,
  type GetSymptomsResponse,
} from '@food-mapper/shared';

import { parseRequest } from '../validation/index.js';
import {
  createSymptom,
  findSymptomsByUserId,
} from '../repositories/symptoms.js';

export const listSymptoms = async (
  userId: string,
): Promise<GetSymptomsResponse> => {
  return findSymptomsByUserId(userId);
};

export const createUserSymptom = async (
  userId: string,
  body: unknown,
): Promise<CreateSymptomResponse> => {
  const { name } = parseRequest(createSymptomRequestSchema, body);

  return createSymptom({ userId, name });
};
