import { describe, expect, it } from 'vitest';

import {
  createSymptomRequestSchema,
  patchSymptomRequestSchema,
} from './schemas.js';

describe('createSymptomRequestSchema', () => {
  it('trims symptom name', () => {
    expect(
      createSymptomRequestSchema.safeParse({
        name: ' bloating ',
      }),
    ).toMatchObject({
      success: true,
      data: {
        name: 'bloating',
      },
    });
  });

  it('returns "Symptom name is required" for empty name', () => {
    expect(
      createSymptomRequestSchema.safeParse({
        name: '',
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Symptom name is required' }],
      },
    });
  });
});

describe('patchSymptomRequestSchema', () => {
  it('accepts partial updates', () => {
    expect(
      patchSymptomRequestSchema.safeParse({
        sortOrder: 2,
        isActive: false,
      }),
    ).toMatchObject({
      success: true,
      data: {
        sortOrder: 2,
        isActive: false,
      },
    });
  });

  it('returns "At least one field is required" for empty body', () => {
    expect(patchSymptomRequestSchema.safeParse({})).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'At least one field is required' }],
      },
    });
  });
});
