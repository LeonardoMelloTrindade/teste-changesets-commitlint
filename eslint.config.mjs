import globals from 'globals';
import pluginJs from '@eslint/js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'default-case': 'error'
    }
  },
  pluginJs.configs.recommended,
];