const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
  },
  watchOptions: {
    ignored: [
      '__tests__',
      'node_modules',
      'public',
      'dist',
      'coverage',
    ],
  },
};
