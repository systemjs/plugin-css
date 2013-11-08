var waitSeconds = 10;

var head = document.getElementsByTagName('head')[0];

// get all link tags in the page
var links = document.getElementsByTagName('link');
var linkHrefs = [];
for (var i = 0; i < links.length; i++) {
  linkHrefs.push(links[i].href);
}

var isWebkit = !!window.navigator.userAgent.match(/AppleWebKit\/([^ ;]*)/);
var webkitLoadCheck = function(link, callback) {
  setTimeout(function() {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];
      if (sheet.href == link.href)
        return callback();
    }
    webkitLoadCheck(link, callback);
  }, 10);
}

var noop = function() {}

var loadCSS = function(url, callback, errback) {
  var timeout = setTimeout(function() {
    errback('Unable to load CSS');
  }, waitSeconds * 1000);
  var _callback = function() {
    clearTimeout(timeout);
    link.onload = noop;
    setTimeout(callback, 7);
  }
  var link = document.createElement('link')  ;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = url;

  if (!isWebkit)
    link.onload = _callback;
  else
    webkitLoadCheck(link, _callback);

  head.appendChild(link);
}


module.exports = function(name, address, fetch, callback, errback) {
  // dont reload styles loaded in the head
  for (var i = 0; i < linkHrefs.length; i++)
    if (address == linkHrefs[i])
      return callback();
  loadCSS(address, callback, errback);
}
