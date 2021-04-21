module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    semi: ['error', 'never'],
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
  },
}
