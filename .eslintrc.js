const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
    ],
  },
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'unicorn',
    'jest',
    'jest-formatting',
    'tsdoc',
    'deprecation',
    'notice',
    'import',
    'promise',
  ],
  env: {
    browser: true,
    jest: true,
    commonjs: true,
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:compat/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-formatting/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'tsdoc/syntax': 'error',
    'unicorn/filename-case': [
      'error',
      {cases: {pascalCase: true, kebabCase: true}},
    ],
    'deprecation/deprecation': 'warn',
    'max-params': ['error', {max: 2}],
    'notice/notice': [
      'error',
      {
        mustMatch: `Copyright ${new Date().getFullYear()} {usernamehere} <{email here}>`,
        templateFile: path.resolve(__dirname, 'config/copyright.js'),
        onNonMatchingHeader: 'replace',
      },
    ],
    'unicorn/no-array-for-each': 'off',
  },
  reportUnusedDisableDirectives: true,
};
