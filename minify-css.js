const fs = require('fs'),
  postcss = require('postcss'),
  csso = require('postcss-csso');

const css = fs.readFileSync('./public/style.css', { encoding: 'utf8' });

postcss([
  csso
])
.process(css)
.then((result) => {
  fs.writeFile('./public/style.css', result.css, (err) => {
    console.log('minify done!');
  });
});

