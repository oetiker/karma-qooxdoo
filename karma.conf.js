// Karma configuration
// Generated on Mon Apr 11 2016 10:15:49 GMT+0200 (CEST)
var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qooxdoo'],


    // list of files / patterns to load in the browser => auto-filled by the qooxdoo adapter
    files: [],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // 'source/class/qx/{*.js,!(test)/**/*.js}': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    client: {
      captureConsole: false
    },

    browserNoActivityTimeout: 60000,

    coverageReporter: {
      dir: 'coverage',
      reporters: [
        // reporters not supporting the `file` property
        // { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // proxy settings for coverage
    // proxies: {
    //   '/resource/': 'http://127.0.0.1:9999/source/resource/',
    //   '/qx/': 'http://127.0.0.1:9999/test/resource/qx/',
    //   '/source/resource/': 'http://127.0.0.1:9999/source/resource/',
    //   '/test/': 'http://127.0.0.1:9999/test/',
    //   '/script/': '/base/test/script/',
    //   '/component/': '/absolute' + path.resolve(__dirname, '../component') + "/",
    //   '/source/class/': '/base/source/class/',
    // },

    // proxy settings without coverage (proxying resources, including PHP scripts to a PHP enabled webserver)
    // Note: you have to start a local php server with 'php -S 127.0.0.1:9999' in this folder
    proxies: {
      '/resource/': 'http://127.0.0.1:9999/source/resource/',
      '/qx/': 'http://127.0.0.1:9999/test/resource/qx/',
      '/source/resource/': 'http://127.0.0.1:9999/source/resource/'
    },

    qooxdooFramework: {
      testSources: true,  // test qooxdoo sources [default: false]
      startDelay: 0       // adds delay before the first test runs [default: 0], usefull if you want to open debugging tools in browser
                          // before running the tests
    }
  })
};
