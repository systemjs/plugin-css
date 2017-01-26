SystemJS.config({
  browserConfig: {
    "paths": {
      "github:": "/jspm_packages/github/",
      "npm:": "/jspm_packages/npm/"
    }
  },
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "npm:": "jspm_packages/npm/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.15"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "autoprefixer": "npm:autoprefixer@6.5.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.0",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "cssnano": "npm:cssnano@3.7.5",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "graceful-fs": "npm:graceful-fs@4.1.8",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.0",
    "postcss": "npm:postcss@5.2.2",
    "postcss-import": "github:guybedford/postcss-import@feature%2Fload-source-maps",
    "postcss-url": "npm:postcss-url@5.1.2",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "uglify-js": "npm:uglify-js@2.3.6",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.0",
    "vm": "npm:jspm-nodelibs-vm@0.2.0"
  },
  packages: {
    "github:guybedford/postcss-import@feature%2Fload-source-maps": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "read-cache": "npm:read-cache@1.0.0",
        "resolve": "npm:resolve@1.1.7"
      }
    },
    "npm:postcss@5.2.2": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "supports-color": "npm:supports-color@3.1.2",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:read-cache@1.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:supports-color@3.1.2": {
      "map": {
        "has-flag": "npm:has-flag@1.0.0"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.6",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.8",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "elliptic": "npm:elliptic@6.3.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:pbkdf2@3.0.8": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "sha.js": "npm:sha.js@2.4.5",
        "cipher-base": "npm:cipher-base@1.0.3",
        "ripemd160": "npm:ripemd160@1.0.1"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.8",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.8.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.8.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:postcss-url@5.1.2": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "directory-encoder": "npm:directory-encoder@0.7.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "mime": "npm:mime@1.3.4",
        "minimatch": "npm:minimatch@3.0.3",
        "js-base64": "npm:js-base64@2.1.9"
      }
    },
    "npm:cssnano@3.7.5": {
      "map": {
        "autoprefixer": "npm:autoprefixer@6.5.0",
        "postcss": "npm:postcss@5.2.2",
        "postcss-convert-values": "npm:postcss-convert-values@2.4.0",
        "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.1",
        "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
        "postcss-discard-unused": "npm:postcss-discard-unused@2.2.1",
        "defined": "npm:defined@1.0.0",
        "postcss-merge-rules": "npm:postcss-merge-rules@2.0.10",
        "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
        "postcss-ordered-values": "npm:postcss-ordered-values@2.2.2",
        "decamelize": "npm:decamelize@1.2.0",
        "postcss-calc": "npm:postcss-calc@5.3.1",
        "postcss-minify-params": "npm:postcss-minify-params@1.0.5",
        "postcss-colormin": "npm:postcss-colormin@2.2.1",
        "has": "npm:has@1.0.1",
        "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
        "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.0",
        "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.0.1",
        "postcss-reduce-idents": "npm:postcss-reduce-idents@2.3.0",
        "postcss-normalize-url": "npm:postcss-normalize-url@3.0.7",
        "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
        "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.3",
        "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.0",
        "postcss-minify-selectors": "npm:postcss-minify-selectors@2.0.5",
        "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
        "postcss-zindex": "npm:postcss-zindex@2.1.1",
        "postcss-svgo": "npm:postcss-svgo@2.1.5",
        "object-assign": "npm:object-assign@4.1.0",
        "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.1",
        "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.3",
        "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:autoprefixer@6.5.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "num2fraction": "npm:num2fraction@1.2.2",
        "caniuse-db": "npm:caniuse-db@1.0.30000540",
        "browserslist": "npm:browserslist@1.4.0",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "normalize-range": "npm:normalize-range@0.1.2"
      }
    },
    "npm:postcss-unique-selectors@2.0.2": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-calc@5.3.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "reduce-css-calc": "npm:reduce-css-calc@1.3.0",
        "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
      }
    },
    "npm:postcss-merge-rules@2.0.10": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "vendors": "npm:vendors@1.0.1"
      }
    },
    "npm:postcss-discard-duplicates@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-reduce-idents@2.3.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:browserslist@1.4.0": {
      "map": {
        "caniuse-db": "npm:caniuse-db@1.0.30000540"
      }
    },
    "npm:postcss-convert-values@2.4.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-merge-longhand@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-ordered-values@2.2.2": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-unused@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "uniqs": "npm:uniqs@2.0.0",
        "flatten": "npm:flatten@1.0.2"
      }
    },
    "npm:postcss-merge-idents@2.1.7": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "has": "npm:has@1.0.1"
      }
    },
    "npm:postcss-minify-params@1.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-discard-overridden@0.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-colormin@2.2.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "colormin": "npm:colormin@1.1.2"
      }
    },
    "npm:postcss-normalize-charset@1.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-minify-gradients@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-discard-comments@2.0.4": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-minify-selectors@2.0.5": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "alphanum-sort": "npm:alphanum-sort@1.0.2",
        "postcss-selector-parser": "npm:postcss-selector-parser@2.2.1"
      }
    },
    "npm:postcss-reduce-initial@1.0.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:postcss-minify-font-values@1.0.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-normalize-url@3.0.7": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-absolute-url": "npm:is-absolute-url@2.0.0",
        "normalize-url": "npm:normalize-url@1.6.1"
      }
    },
    "npm:postcss-svgo@2.1.5": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0",
        "is-svg": "npm:is-svg@2.0.1",
        "svgo": "npm:svgo@0.7.1"
      }
    },
    "npm:postcss-zindex@2.1.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "uniqs": "npm:uniqs@2.0.0"
      }
    },
    "npm:postcss-reduce-transforms@1.0.3": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "postcss-value-parser": "npm:postcss-value-parser@3.3.0"
      }
    },
    "npm:postcss-filter-plugins@2.0.1": {
      "map": {
        "postcss": "npm:postcss@5.2.2",
        "uniqid": "npm:uniqid@3.1.0"
      }
    },
    "npm:postcss-discard-empty@2.1.0": {
      "map": {
        "postcss": "npm:postcss@5.2.2"
      }
    },
    "npm:directory-encoder@0.7.2": {
      "map": {
        "img-stats": "npm:img-stats@0.5.2",
        "fs-extra": "npm:fs-extra@0.23.1",
        "handlebars": "npm:handlebars@1.3.0"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:fs-extra@0.23.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.8",
        "rimraf": "npm:rimraf@2.5.4",
        "jsonfile": "npm:jsonfile@2.4.0"
      }
    },
    "npm:postcss-selector-parser@2.2.1": {
      "map": {
        "flatten": "npm:flatten@1.0.2",
        "indexes-of": "npm:indexes-of@1.0.1",
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:colormin@1.1.2": {
      "map": {
        "has": "npm:has@1.0.1",
        "css-color-names": "npm:css-color-names@0.0.4",
        "color": "npm:color@0.11.3"
      }
    },
    "npm:normalize-url@1.6.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "query-string": "npm:query-string@4.2.3",
        "prepend-http": "npm:prepend-http@1.0.4",
        "sort-keys": "npm:sort-keys@1.1.2"
      }
    },
    "npm:svgo@0.7.1": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "whet.extend": "npm:whet.extend@0.9.9",
        "colors": "npm:colors@1.1.2",
        "coa": "npm:coa@1.0.1",
        "sax": "npm:sax@1.2.1",
        "js-yaml": "npm:js-yaml@3.6.1",
        "csso": "npm:csso@2.2.1"
      }
    },
    "npm:img-stats@0.5.2": {
      "map": {
        "xmldom": "npm:xmldom@0.1.22"
      }
    },
    "npm:reduce-css-calc@1.3.0": {
      "map": {
        "reduce-function-call": "npm:reduce-function-call@1.0.1",
        "math-expression-evaluator": "npm:math-expression-evaluator@1.2.14",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:uniqid@3.1.0": {
      "map": {
        "macaddress": "npm:macaddress@0.2.8"
      }
    },
    "npm:is-svg@2.0.1": {
      "map": {
        "html-comment-regex": "npm:html-comment-regex@1.1.1"
      }
    },
    "npm:reduce-function-call@1.0.1": {
      "map": {
        "balanced-match": "npm:balanced-match@0.1.0"
      }
    },
    "npm:handlebars@1.3.0": {
      "map": {
        "optimist": "npm:optimist@0.3.7"
      }
    },
    "npm:query-string@4.2.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:uglify-js@2.3.6": {
      "map": {
        "source-map": "npm:source-map@0.1.43",
        "optimist": "npm:optimist@0.3.7",
        "async": "npm:async@0.2.10"
      }
    },
    "npm:csso@2.2.1": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "clap": "npm:clap@1.1.1"
      }
    },
    "npm:math-expression-evaluator@1.2.14": {
      "map": {
        "lodash.indexof": "npm:lodash.indexof@4.0.5"
      }
    },
    "npm:color@0.11.3": {
      "map": {
        "color-string": "npm:color-string@0.3.0",
        "color-convert": "npm:color-convert@1.5.0",
        "clone": "npm:clone@1.0.2"
      }
    },
    "npm:optimist@0.3.7": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.3"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.0"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:js-yaml@3.6.1": {
      "map": {
        "argparse": "npm:argparse@1.0.7",
        "esprima": "npm:esprima@2.7.3"
      }
    },
    "npm:glob@7.1.0": {
      "map": {
        "minimatch": "npm:minimatch@3.0.3",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "inflight": "npm:inflight@1.0.5",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "once": "npm:once@1.4.0"
      }
    },
    "npm:coa@1.0.1": {
      "map": {
        "q": "npm:q@1.4.1"
      }
    },
    "npm:color-string@0.3.0": {
      "map": {
        "color-name": "npm:color-name@1.1.1"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:argparse@1.0.7": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:inflight@1.0.5": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:clap@1.1.1": {
      "map": {
        "chalk": "npm:chalk@1.1.3"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:stream-http@2.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.0": {
      "map": {
        "punycode-browserify": "npm:punycode@1.4.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.0": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.4.0"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    }
  }
});
