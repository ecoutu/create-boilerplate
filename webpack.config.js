const webpackCommon = require('./webpack.common');
const {merge} = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = [
  merge(webpackCommon, require(`./webpack.${NODE_ENV}.js`), {
    name: 'bundle-commonjs',
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../public/webpack/cjs/index.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsOptions: {preset: 'verbose'},
        statsFilename: '../public/webpack/cjs/stats.json',
      }),
    ],
    output: {
      filename: `[name].js`,
      uniqueName: 'bundle-commonjs',
      library: {
        type: 'commonjs2',
      },
    },
  }),
  merge(webpackCommon, require(`./webpack.${NODE_ENV}.js`), {
    name: 'bundle-umd',
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../public/webpack/umd/index.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsOptions: {preset: 'verbose'},
        statsFilename: '../public/webpack/umd/stats.json',
      }),
    ],
    output: {
      filename: `[name].umd.js`,
      globalObject: 'this',
      uniqueName: 'bundle-umd',
      library: {
        type: 'umd',
      },
    },
  }),
  merge(webpackCommon, require(`./webpack.${NODE_ENV}.js`), {
    name: 'bundle-esm',
    experiments: {
      outputModule: true,
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: '../public/webpack/esm/index.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsOptions: {preset: 'verbose'},
        statsFilename: '../public/webpack/esm/stats.json',
      }),
    ],
    output: {
      filename: `[name].esm.js`,
      module: true,
      scriptType: 'module',
      uniqueName: 'bundle-esm',
      libraryTarget: 'module',
      library: {
        type: 'module',
      },
    },
  }),
];
