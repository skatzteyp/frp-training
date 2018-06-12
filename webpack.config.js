const path = require('path');

module.exports = {
  entry: './src/scripts.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'public')
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['stage-2']
  //         }
  //       }
  //     }
  //   ]
  // }
}
