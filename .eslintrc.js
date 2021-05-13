module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:jsdoc/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    parser: '@babel/eslint-parser'
  },
  plugins: [
    'jsdoc'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-returns-description': 'off'
  },
  overrides: [{
    files: ['*.ts'],
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint'
    ],
    extends: [
      'plugin:@typescript-eslint/recommended'
    ]
  }]
}
