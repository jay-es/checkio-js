/* eslint-disable no-console, no-eval */
const fs = require('fs');
const colors = require('./colors.js');

let timerId = 0;

const doTest = () => {
    console.log(`${new Date().toLocaleString()} ${'-'.repeat(60)}`);

    try {
        const script = fs.readFileSync('./test.js', { encoding: 'UTF-8' });
        eval(script);
        console.log(colors.bgGreen, 'SUCCESS!', colors.reset);
    } catch (e) {
        console.log(colors.bgRed, 'ERROR!', colors.reset);
        console.error(colors.red, e);
    }

    console.log(colors.reset);
};

fs.watch('./test.js', () => {
    clearTimeout(timerId);
    timerId = setTimeout(doTest, 25);
});

// Object.keys(colors).forEach((k) => {
//     console.log(`${colors[k]}%s${colors.reset}`, k);
// });
