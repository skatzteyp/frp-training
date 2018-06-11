const fs = require('fs'),
  path = require('path');

fs.readdir('./public', (err, files) => {
  for (let file of files) {
    fs.unlink(path.join('./public', file), (err) => {

    });
  }
});
