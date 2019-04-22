const fs = require('fs');

const cat = cmd => {
  let fileName = cmd.slice(4);
  let isItCat = cmd.slice(0, 3);

  if (isItCat === 'cat') {
    fs.readFile(`./${fileName}`, (err, data) => {
      if (err) {
        throw err
      } else {
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
      }
    })
  }
}


module.exports = {
  cat
}

