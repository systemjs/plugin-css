css
===

JSPM CSS loading plugin

Builder Support
---

When building with [SystemJS Builder](https://github.com/systemjs/builder), by default CSS will be inlined into the JS bundle and injected on execution.

To alter this behaviour use the SystemJS configuration options:


* `buildCSS`: true / false whether to build CSS or leave them as separate file requests with the plugin running in production. Defaults to true.
* `separateCSS`: true / false whether to build a CSS file at the same output name as the bundle itself to be included with a link tag. Defaults to false.

### Build Example

```javascript
  var builder = require('systemjs-builder');

  // `builder.loadConfig` will load config from a file
  builder.loadConfig('./cfg.js')
  .then(function() {
    // additional config can also be set through `builder.config`
    builder.config({
      baseURL: 'file:' + process.cwd(),
      // buildCSS: false,
      separateCSS: true
    });

    return builder.build('myModule', 'bundle.js');
  });
```

Will generate `bundle.js` containing the JS files and `bundle.css` containing the compressed CSS for the bundle.