import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import {
  createSharedImportRestrictions,
  createTypeScriptBase,
} from '../../eslint.shared.mjs';

export default [
  ...createTypeScriptBase(),
  createSharedImportRestrictions(),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
];
