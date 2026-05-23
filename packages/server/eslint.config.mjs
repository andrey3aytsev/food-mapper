import {
  createSharedImportRestrictions,
  createTypeScriptBase,
} from '../../eslint.shared.mjs';

export default [...createTypeScriptBase(), createSharedImportRestrictions()];
