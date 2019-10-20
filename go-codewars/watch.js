/* eslint-disable no-console */
const fs = require('fs');
const { exec } = require('child_process');

let onGoing = false;

const cb = () => {
  if (onGoing) return;

  onGoing = true;
  console.log(new Date());

  exec('go run ./main/main.go', (err, stdout, stderr) => {
    onGoing = false;

    if (err) console.error(err.message);
    if (stderr) console.error(stderr);
    if (stdout) console.log(stdout);
  });
};

cb();
fs.watch('./kata/kata.go', cb);
fs.watch('./kata/testCases.go', cb);
