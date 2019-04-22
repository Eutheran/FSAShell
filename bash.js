const modulePWD = require('./pwd');
const moduleLS = require('./ls');
const moduleCAT = require('./cat')
const { pwd } = modulePWD;
const { ls } = moduleLS;
const { cat } = moduleCAT;
process.stdout.write('prompt > ');


process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  pwd(cmd);
  ls(cmd);
  cat(cmd);
});
