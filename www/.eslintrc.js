module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // "@typescript-eslint/explicit-function-return-type": "off",
    // "@typescript-eslint/no-use-before-define": "off",
    'import/extensions': 'off',
    // "import/no-extraneous-dependencies": "off",
    'import/no-unresolved': 'off',
    // "import/prefer-default-export": "off",
    // "no-nested-ternary": "off",
    // "no-underscore-dangle": "off",
  },
}
