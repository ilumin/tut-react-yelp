var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai'],

    plugins: [
      'krama-mocha',
      'krama-chai',
      'krama-webpack',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    files: [
      'tests.webpack.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

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
