module.exports = {
  extends: '@valtech-ch/eslint-config-react',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './**/tsconfig.json',
      },
    },
  },
}
