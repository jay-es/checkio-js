

/*
const _ =
console.log(_);
return _;
*/


// ----------------------------------------------------------------

const assert = require('assert');

const Test = {
  assertEquals: assert.strictEqual,
  assertDeepEquals: assert.deepStrictEqual,
  assertSimilar: assert.deepStrictEqual,
  expect: assert.ok,
  describe: (title, fn) => fn(),
  it: (title, fn) => fn(),
};

const { describe, it } = Test; // eslint-disable-line no-unused-vars

// ----------------------------------------------------------------
/* eslint-disable */


