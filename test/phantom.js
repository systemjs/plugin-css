var page = require('webpage').create();
page.open('test/testrunner.html', function(status) {
});

page.onConsoleMessage = function(msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + ' (from line #' + lineNum + ' in "' + sourceId + '")');
  //page.render('example.png');
  phantom.exit();
};