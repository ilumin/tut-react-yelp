var path = require('path');
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    // plugins: [
    //   'krama-mocha',
    //   'krama-chai',
    //   'krama-webpack',
    //   'karma-phantomjs-launcher',
    //   'karma-spec-reporter',
    //   'karma-sourcemap-loader'
    // ],

    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
