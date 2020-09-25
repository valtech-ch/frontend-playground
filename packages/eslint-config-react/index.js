module.exports = {
  // root: true,
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    // project: 'tsconfig.json',
    // sourceType: 'module',
  },
  env: {
    // browser: true,
    // es6: true,
    // node: true,
    jest: true,
    // https://www.npmjs.com/package/eslint-plugin-jest#usage
    'jest/globals': true,
    // 'shared-node-browser': true,
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //   },
  // },
  // plugins: ['import'],
  extends: [
    '@valtech-ch/eslint-config-base',
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
    'airbnb/hooks',
    // https://www.npmjs.com/package/eslint-plugin-jest
    'plugin:jest/recommended',
    'plugin:jest/style',
    // https://www.npmjs.com/package/eslint-plugin-react
    'plugin:react/recommended',
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
    /**
     * Make sure to put prettier last, so it gets the chance to override other
     * configs.
     *
     * @see https://github.com/prettier/eslint-config-prettier
     */
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  rules: {
    // https://www.npmjs.com/package/eslint-plugin-react
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',

    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
