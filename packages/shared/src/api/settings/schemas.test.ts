import { describe, expect, it } from 'vitest';

import { patchSettingsRequestSchema } from './schemas.js';

describe('patchSettingsRequestSchema', () => {
  it('accepts partial daily goals', () => {
    expect(
      patchSettingsRequestSchema.safeParse({
        dailyGoals: {
          calories: 2000,
          protein: 120,
        },
      }),
    ).toMatchObject({
      success: true,
      data: {
        dailyGoals: {
          calories: 2000,
          protein: 120,
        },
      },
    });
  });

  it('returns "Must be a non-negative number" for negative calories', () => {
    expect(
      patchSettingsRequestSchema.safeParse({
        dailyGoals: {
          calories: -1,
        },
      }),
    ).toMatchObject({
      success: false,
      error: {
        issues: [{ message: 'Must be a non-negative number' }],
      },
    });
  });
});
