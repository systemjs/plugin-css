var csso = require('csso');

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
  // TODO, option here to output a separate file to opts.outFile.replace(/.js$/, '.css');

  if (this.buildCSS === false)
    return '';
  var cssOutput = csso.justDoIt(loads.reduce(function(loadA, loadB) {
    return loadA.source + loadB.source;
  }, { source: '' }));

  var stubDefines = loads.map(function(load) {
    return "System\.register('" + load.name + "', [], false, function() {});";
  }).join('\n');

  return [stubDefines, cssInject, "('" + escape(cssOutput) + "')"].join('\n');
}
