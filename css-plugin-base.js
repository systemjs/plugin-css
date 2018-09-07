/*
 * Base CSS Plugin Class
 */

function CSSPluginBase(compileCSS) {
  this.compileCSS = compileCSS;

  this.translate = function(load, opts) {
    var loader = this;
    if (loader.builder && loader.buildCSS === false) {
      load.metadata.build = false;
      return;
    }

    var path = this._nodeRequire && this._nodeRequire('path');

    return Promise.resolve(compileCSS.call(loader, load.source, load.address, load.metadata.loaderOptions || {}))
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

CSSPluginBase.prototype.bundle = function(loads, compileOpts, outputOpts) {
  var loader = this;
  return getBuilder(loader)
  .then(function(builder) {
    return builder.bundle.call(loader, loads, compileOpts, outputOpts);
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

function cssInject(style, css) {
  if (style) {
      style.innerHTML = css;
  } else {
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    document.head.appendChild(style);
  }
  return style;
}

// NB the <link> + blob URL trick is required to make chrome detect the source maps
function cssInjectSourceMaps(link, css) {
  var href = URL.createObjectURL(new Blob([css], { type:'text/css' }));;
  if (link) {
    link.href = href;
  } else {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }
  return link;
}

var elementsContainerKey = '__CSSPluginBase.elements';
CSSPluginBase.prototype.instantiate = function(load) {
  if (this.builder || typeof document === 'undefined')
      return;

  var enableInlineSourceMaps = this.inlineCssSourceMaps && load.metadata.styleSourceMap;
  var cssElements = document[elementsContainerKey] || (document[elementsContainerKey] = {});
  var element = cssElements[load.address];

  if (!enableInlineSourceMaps) {
    cssElements[load.address] = cssInject(element, load.metadata.style);
  } else {
    var cssOutput = load.metadata.style
      + '\n/*# sourceMappingURL=data:application/json,'
      + encodeURIComponent(load.metadata.styleSourceMap) + '*/';

    cssElements[load.address] = cssInjectSourceMaps(element, cssOutput);
  }
};

module.exports = CSSPluginBase;
