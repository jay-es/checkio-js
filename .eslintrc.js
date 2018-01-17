module.exports = {
  env: {
    node: true
  },
  extends: 'airbnb',
  rules: {
    indent: ["error", 4],
    'no-plusplus': [2, { "allowForLoopAfterthoughts": true }], // for文はOKにする
  }
}
