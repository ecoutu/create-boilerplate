const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'browserslist:last 2 versions',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/, /dist/],
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
};
