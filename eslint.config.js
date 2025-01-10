import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';
import js from '@eslint/js';

const commonRules = {
  // https://eslint.org/docs/latest/rules/curly
  curly: ['error', 'all'],
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error'],
  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],
  // https://eslint.org/docs/latest/rules/prefer-arrow-callback
  'prefer-arrow-callback': 'off',
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
  // https://eslint.org/docs/latest/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: ['_id', '__typename', '__schema', '__dirname', '_global'],
      allowAfterThis: true,
    },
  ],
};

export default [
  skipFormatting,
  js.configs.recommended,

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  {
    rules: {
      '@typescript-eslint/no-namespace': 'off',
      ...commonRules,
    },
  },

];
