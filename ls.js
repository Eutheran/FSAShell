const fs = require('fs');

const ls = cmd => {
  if (cmd === 'ls'){
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        throw err
      } else {
        process.stdout.write('\n' + files.join('\n') + '\n' + '\n')
        process.stdout.write('prompt > ')
      }
    })
  }
}

module.exports = {
  ls
};
