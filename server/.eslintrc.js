module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
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
