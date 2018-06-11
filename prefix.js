const fs = require('fs'),
  autoprefixer = require('autoprefixer'),
  postcss = require('postcss');

const prefixer = postcss([ autoprefixer ]);
const css = fs.readFileSync('./public/style.css', { encoding: 'utf8' });

prefixer.process(css)
.then((result) => {
  fs.writeFile('./public/style.css', result.css, (err) => {
    console.log('prefixdone!');
  });
});
