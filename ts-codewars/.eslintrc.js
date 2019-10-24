module.exports = {
  env: {
    mocha: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'class-methods-use-this': 0,
    'lines-between-class-members': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
  },
}
