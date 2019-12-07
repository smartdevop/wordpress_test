exports.config = {
  tests: './scenario/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://45.118.145.149:10000',
      show: false,
      headless: true,
      chrome: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    "reporterOptions": {
      "mochaFile": "./result.xml"
    }
  },
  name: 'test_wordpress'
}