module.exports = {
  // root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  plugins: ['import'],
  extends: [
    // https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript/base',
    // https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y
    'plugin:jsx-a11y/recommended',
    // https://www.npmjs.com/package/eslint-plugin-import
    'plugin:import/errors',
    'plugin:import/warnings',
    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    // general ESLint rules
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': 'warn',

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/extensions': ['error', 'never'],
  },
}
