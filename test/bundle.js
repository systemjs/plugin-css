System.registerDynamic("test/data/test.css!css.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[a](d.createTextNode(c));})
("@import \"./dep.css\";body{background-color:red;background-image:url(test/data/x.png)}\n/*# sourceMappingURL=__.css.map */");