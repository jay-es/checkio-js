/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const colors = require('./colors.js');

const TEMP_FILE = path.resolve('tmp.js');
let timerId = 0;

const doTest = () => {
    const divider = `${new Date().toLocaleString()} ${'-'.repeat(60)}`;
    const script = fs.readFileSync('./test.js', { encoding: 'UTF-8' });
    fs.writeFileSync(TEMP_FILE, `module.exports = () => {${script}};`);

    try {
        console.log(colors.bright);
        console.log(divider, colors.reset);
        require(TEMP_FILE)(); // eslint-disable-line global-require, import/no-dynamic-require
        console.log(colors.bgGreen, 'SUCCESS!', colors.reset);
    } catch (e) {
        console.log(colors.bgRed, 'ERROR!', colors.reset);
        console.error(colors.yellow, e, colors.reset);
    }

    fs.unlinkSync(TEMP_FILE);
    delete require.cache[TEMP_FILE];
};

doTest();

fs.watch('./test.js', () => {
    clearTimeout(timerId);
    timerId = setTimeout(doTest, 25);
});

// Object.keys(colors).forEach((k) => {
//     console.log(`${colors[k]}%s${colors.reset}`, k);
// });
