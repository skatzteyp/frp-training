const sass = require('node-sass'),
  fs = require('fs');

sass.render({
  file: './src/style.scss'
}, (err, result) => {
  fs.writeFile('./public/style.css', result.css.toString(), (err) => {
    console.log('sass compile done!');
  });
});
