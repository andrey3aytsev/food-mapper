import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export function createSharedImportRestrictions() {
  return {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@food-mapper/shared/*'],
              message:
                'Import types and contracts only from the @food-mapper/shared package root.',
            },
            {
              group: ['../shared/**', '../../shared/**'],
              message:
                'Import from @food-mapper/shared, not via relative paths into packages/shared.',
            },
          ],
        },
      ],
    },
  };
}

export function createTypeScriptBase() {
  return tseslint.config(
    {
      ignores: [
        '**/dist/**',
        '**/node_modules/**',
        '**/build/**',
        '**/.vite/**',
        '**/coverage/**',
      ],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
  );
}
