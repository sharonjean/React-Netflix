require('babel-register')
require('babel-polyfill')
// set up babel pipeline to be able to run babel tests

// create browser-like environment for tests to run in
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
// navigator will allow tests to go back and forth page to page
