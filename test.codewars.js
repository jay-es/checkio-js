

// ----------------------------------------------------------------

const assert = require('assert');

const Test = {
  assertEquals: assert.strictEqual,
  assertSimilar: assert.deepStrictEqual,
  expect: assert.ok,
  describe: (title, fn) => fn(),
  it: (title, fn) => fn(),
};

const { describe, it } = Test;

// ----------------------------------------------------------------
/* eslint-disable */


