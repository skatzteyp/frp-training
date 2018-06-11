const ejs = require('ejs'),
  fs = require('fs');

ejs.renderFile('./src/index.ejs', {}, (err, str) => {
  fs.writeFile('./public/index.html', str, (err) => {
    console.log('ejs compile done!');
  });
});
