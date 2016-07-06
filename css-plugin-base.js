/*
 * Base CSS Plugin Class
 */

function CSSPluginBase(compileCSS) {
  this.compileCSS = compileCSS;

  this.translate = function(load, opts) {
    var path = this._nodeRequire && this._nodeRequire('path');

    var loader = this;

    var outAddress = loader.separateCSS ? toFileURL(path.resolve(opts.outFile.replace(/\.js$/, '.css'))) : loader.rootURL && toFileURL(path.resolve(loader.rootURL)) || loader.baseURL;    

    return Promise.resolve(compileCSS.call(loader, load.source, load.address, outAddress, load.metadata.loaderOptions || {}))
    .then(function(result) {
      load.metadata.style = result.css;
      load.metadata.styleSourceMap = result.map;
      if (result.moduleFormat)
        load.metadata.format = result.moduleFormat;
      return result.moduleSource || '';
    });
  };
}

var isWin = typeof process != 'undefined' && process.platform.match(/^win/);
function toFileURL(path) {
  return 'file://' + (isWin ? '/' : '') + path.replace(/\\/g, '/');
}

var builderPromise;
function getBuilder(loader) {
  if (builderPromise)
    return builderPromise;
  return builderPromise = loader['import']('./css-plugin-base-builder.js', module.id);
}

CSSPluginBase.prototype.inline = function(loads, opts) {
  var loader = this;
  return getBuilder(loader)
  .then(function(builder) {
    return builder.inline.call(loader, loads, opts);
  });
};

CSSPluginBase.prototype.listAssets = function(loads, opts) {
  var loader = this;
  return getBuilder(loader)
  .then(function(builder) {
    return builder.listAssets.call(loader, loads, opts);
  });
};

/*
 * <style> injection browser plugin
 */
// NB hot reloading support here
CSSPluginBase.prototype.instantiate = function(load) {
  if (this.builder)
    return;

  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = load.metadata.style;
  document.head.appendChild(style);
};

module.exports = CSSPluginBase;