module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty-function': 'off',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
}
