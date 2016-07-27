css
===

CSS loading plugin

Installation
---

For installing with JSPM run:

```
jspm install css
```

For use with SystemJS natively, use:

```
npm install systemjs-plugin-css
```

Then add the configuration:

```javascript
SystemJS.config({
  map: {
    css: 'node_modules/systemjs-plugin-css/css.js'
  }
});
```

Setup
---

To configure css files to load with the plugin set:

```javascript
SystemJS.config({
  meta: {
    '*.css': { loader: css }
  }
});
```

Or via package configuration as well:

```javascript
SystemJS.config({
  packages: {
    'src/': {
      meta: {
        '*.css': { loader: 'css' }
      }
    }
  }
});
```

Advanced Configuration
---

While this plugin don't have plugin functionality yet to run csscomb, 
autoprefixer, less, scss, postcss etc. you will still be able to do that 
on backend side.

You can override css location with `System.cssOptions.map` property.

Example:

```javascript
SystemJS.config({
  paths: {
    "app/": "src/"
  },
  cssOptions: {
    "map": {
      "src/*.less": ".tmp/src/*.css"
    }
  }
});
```

On backend side something like grunt, gulp must watch files for changes and
rebuild them in the way you need. BrowserSync could emit changes and do css hot
reload for you.

Other MAP examples:

```javascript
{
  "src/": ".tmp/src/",
  "src": ".tmp/src",
  "src/*.less": ".tmp/src/*.css",
  "src/*.css": ".tmp/src/*.css",
}
```

This plugin performs weighted mapping so if you have multiple matching map 
conditions then the last one with highest weight will be used for location
remap.

Weight measured by amount of characters matched between source location and 
map condition excluding wildcard characters.

Only one wildcard character is allowed to be used in map condition. 

Modular CSS Concepts
---

CSS in the dependency tree implies a CSS modularisation where styles can be scoped directly to the render code that they are bundled with.

Just like JS requires, the order of CSS injection can't be guaranteed. The idea here is that whenever there are style overrides, they should be based on using a more specific selector with an extra id or class at the base, and not assuming a CSS load order. Reset and global styles are a repeated dependency of all modular styles that build on top of them.

### CSS Transpilation

This plugin also acts as a base class that can be extended to author other CSS plugins such as LESS, modular CSS etc.

For example, see the [plugin-less project](http://github.com/systemjs/plugin-less).

Builder Support
---

When building with [SystemJS Builder](https://github.com/systemjs/builder), by default CSS will be inlined into the JS bundle and injected on execution.

To alter this behaviour use the SystemJS configuration options:

* `separateCSS`: true / false whether to build a CSS file at the same output name as the bundle itself to be included with a link tag. Defaults to false.
* `buildCSS`: true / false whether to bundle CSS files or leave as separate requests. Defaults to true.
* `rootURL`: Optional, local path that when set normalizes all CSS URLs to be absolute to this path.

### Build Example

```javascript
  var builder = require('systemjs-builder');

  // `builder.loadConfig` will load config from a file
  builder.loadConfig('./cfg.js')
  .then(function() {
    // additional config can also be set through `builder.config`
    builder.config({
      separateCSS: true,
      rootURL: './public'

      // to disable css optimizations
      // cssOptimize: false
    });

    return builder.build('myModule', 'bundle.js');
  });
```

Will generate `bundle.js` containing the JS files and `bundle.css` containing the compressed CSS for the bundle.

### License

MIT
