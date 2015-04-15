var CleanCSS = require('clean-css');
var fs = require('fs');
var path = require('path');

function escape(source) {
  return source
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029");
}

var cssInject = "(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})";

module.exports = function bundle(loads, opts) {

  var loader = this;

  var stubDefines = loads.map(function(load) {
    return "System\.register('" + load.name + "', [], false, function() {});";
  }).join('\n');

  var rootURL = loader.rootURL || loader.baseURL.substr('file:'.length);

  var cleanCSS = new CleanCSS({
    target: loader.separateCSS ? opts.outFile : rootURL,
    relativeTo: rootURL,
    sourceMap: opts.sourceMaps
  }).minify(loads.map(function(load) {
    return load.address.substr('file:'.length);
  }));

  if (cleanCSS.errors.length)
    throw new Error('CSS Plugin:\n' + cleanCSS.errors.join('\n'));

  var cssOutput = cleanCSS.styles;

  // write a separate CSS file if necessary
  if (loader.separateCSS) {
    var outFile = opts.outFile.replace(/\.js$/, '.css');

    if (opts.sourceMaps) {
      fs.writeFileSync(outFile + '.map', cleanCSS.sourceMap.toString());
      cssOutput += '/*# sourceMappingURL=' + path.basename(outFile) + '.map*/';
    }

    fs.writeFileSync(outFile, cssOutput);

    return stubDefines;
  }

  return [stubDefines, cssInject, '("' + escape(cssOutput) + '");'].join('\n');
}
