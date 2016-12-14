/**
 * # Setup and run
 *
 * npm install -g babel-cli
 * npm install -S babel-preset-es2015
 * babel-node --presets es2015  mongo_test.js
 *
 *
 *
 * @Author: Guan Gui <guiguan>
 * @Date:   2016-12-14T14:26:19+11:00
 * @Email:  root@guiguan.net
 * @Last modified by:   guiguan
 * @Last modified time: 2016-12-14T15:30:03+11:00
 */

import {spawn} from 'child_process';

const mongoShell = spawn('mongo', ['--host', '13.54.17.227', '--port', '27017']);

process
  .stdin
  .on('data', function(buf) {
    mongoShell
      .stdin
      .write('show dbs\n');
  });

mongoShell
  .stdout
  .on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

mongoShell
  .stderr
  .on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

mongoShell.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
