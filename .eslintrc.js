module.exports = {
  extends: [
    'airbnb',
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always', { objectsInObjects: true }],
    'max-len': [ 2, { code: 80 } ],
    'arrow-parens': [2, 'as-needed'],
    'no-use-before-define'
  },
};
