/* eslint-disable no-console */
const babel = require('babel-core');
const fs = require('fs');
const path = require('path');
const colors = require('./colors.js');

const SCRIPT_FILE = path.resolve('test.codewars.js');
const TEMP_FILE = path.resolve('tmp.js');
let timerId = 0;

const doTest = () => {
  try {
    const script = babel.transformFileSync(SCRIPT_FILE).code;
    fs.writeFileSync(TEMP_FILE, `module.exports = () => {${script}\n};`);
  } catch (e) {
    console.error(colors.red, e.toString(), colors.default);
    return;
  }

  try {
    console.log(colors.white);
    console.log(new Date().toLocaleString(), '-'.repeat(60), colors.default);
    require(TEMP_FILE)(); // eslint-disable-line global-require, import/no-dynamic-require
    console.log(colors.bgGreen, 'SUCCESS!', colors.bgDefault);
  } catch (e) {
    console.log(colors.bgRed, 'ERROR!', colors.bgDefault);
    console.error(colors.yellow, e, colors.default);
  }

  fs.unlinkSync(TEMP_FILE);
  delete require.cache[TEMP_FILE];
};

doTest();

fs.watch(SCRIPT_FILE, () => {
  clearTimeout(timerId);
  timerId = setTimeout(doTest, 25);
});

// Object.keys(colors).forEach((k) => {
//   console.log(`${colors[k]}%s${colors.reset}`, k);
// });
