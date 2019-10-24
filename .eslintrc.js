module.exports = {
  env: {
    node: true
  },
  extends: 'airbnb-base',
  rules: {
    'no-continue': 0,
    'no-plusplus': 0,
    'prefer-destructuring': ['error', { AssignmentExpression: { array: false } }],
  }
}
