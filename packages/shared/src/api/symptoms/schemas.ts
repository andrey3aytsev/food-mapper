import { z } from 'zod';

const symptomNameSchema = z
  .string({ error: 'Symptom name is required' })
  .trim()
  .min(1, 'Symptom name is required');

export const createSymptomRequestSchema = z.object({
  name: symptomNameSchema,
});

export const patchSymptomRequestSchema = z
  .object({
    name: symptomNameSchema.optional(),
    sortOrder: z.number().int().optional(),
    isActive: z.boolean().optional(),
  })
  .refine(
    (data) => {
      return (
        data.name !== undefined ||
        data.sortOrder !== undefined ||
        data.isActive !== undefined
      );
    },
    { message: 'At least one field is required' },
  );

export type CreateSymptomRequest = z.infer<typeof createSymptomRequestSchema>;
export type PatchSymptomRequest = z.infer<typeof patchSymptomRequestSchema>;
