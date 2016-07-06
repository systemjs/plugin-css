var CleanCSS = require('./clean-css.js');

var cssInject = "(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})";

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

var isWin = process.platform.match(/^win/);
function fromFileURL(url) {
  return url.substr(7 + !!isWin).replace(/\//g, isWin ? '\\' : '/');
}

exports.inline = function(loads, opts) {

  var loader = this;

  var outFile = loader.separateCSS ? opts.outFile.replace(/\.js$/, '.css') : loader.rootURL || fromFileURL(loader.baseURL);

  var inputFiles = {};
  loads.forEach(function(load) {
    inputFiles[load.address] = {
      styles: load.metadata.style,
      sourceMap: load.metadata.styleSourceMap
    };
  });

  return new Promise(function(resolve, reject) {
    new CleanCSS({ sourceMap: true, target: outFile }).minify(inputFiles, function(err, minified) {
      if (err)
        return reject(err);

      return resolve({
        css: minified.styles,
        map: minified.sourceMap
      });
    });
  })
  .then(function(result) {
    // write a separate CSS file if necessary
    if (loader.separateCSS) {
      if (opts.sourceMaps) {
        fs.writeFileSync(outFile + '.map', result.map.toString());
        cssOutput += '/*# sourceMappingURL=' + outFile.split(/[\\/]/).pop() + '.map*/';
      }

      fs.writeFileSync(outFile, result.css);
    }
    else {
      // NB do data-encoding of css source map for non separateCSS case?
      // cssOutput += '/*# sourceMappingURL=data,''
    }

    return cssInject + '\n("' + escape(result.css) + '");';
  });
};

exports.listAssets = function(loads, opts) {
  return loads.map(function(load) {
    return {
      url: load.address,
      source: load.metadata.style,
      sourceMap: load.metadata.styleSourceMap,
      type: 'css'
    };
  });
};