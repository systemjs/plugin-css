// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position){
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' 
      || !isFinite(position) 
      || Math.floor(position) !== position 
      || position > subjectString.length
    ) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

function tryResolvePath(path, mapCondition, mapRule) {
  var matchLength = 0;
  var resolvedPath = null;

  if (mapCondition.indexOf('*') !== -1) {
    var parts = mapCondition.split('*');

    if (parts.length !== 2) {
      throw new TypeError('Only one wildcard in a path map condition is permitted');
    }

    if (path.startsWith(parts[0]) && path.endsWith(parts[1])) {
      matchLength = mapCondition.length - 1; // minus asterisk character

      if (mapRule.indexOf('*') === -1) {
        throw new TypeError('Path map rule must have wildcard if path map codition have it');
      }

      if (mapRule.indexOf('*') !== mapRule.lastIndexOf('*')) {
        throw new TypeError('Only one wildcard in a path map rule is permitted');
      }

      resolvedPath = mapRule.replace(
        '*',
        path.substr(parts[0].length, path.length - matchLength)
      );
    }
  } else if (path.startsWith(mapCondition)) {
    matchLength = mapCondition.length;
    resolvedPath = mapRule
      + path.substr(mapCondition.length, path.length - matchLength);
  } else if (mapCondition.replace(/\/$/, '') === path) {
    matchLength = mapCondition.length - 1;
    resolvedPath = mapRule.replace(/\/$/, '');
  }

  if (!resolvedPath) {
    return;
  }

  return {
    weight: matchLength,
    path: resolvedPath
  };
}

function resolvePath(path, loader) {
  var map = (loader.cssOptions || {}).map;
  var baseURL = loader.baseURL;

  if (!map) {
    return path;
  }

  var resolution = Object.keys(map)
    .reduce(function (result, condition) {
      var resolution = tryResolvePath(path, baseURL + condition, baseURL + map[condition]);
      if (resolution && (!result || resolution.weight >= result.weight)) {
        return resolution;
      }
      return result;
    }, undefined);

  if (resolution) {
    return resolution.path;
  }

  return path;
}

module.exports = resolvePath;
