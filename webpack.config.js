const path = require('path');

module.exports = {
  entry: './public/scripts.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public')
  }
}
