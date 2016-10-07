var fs = require('fs')
var Builder = require('systemjs-builder')
var System = require('systemjs')

describe('CSS Builder', function() {
	describe('Integration', function() {
		it('Should output css bundle', function() {
			// Run the happy path
			var builder = new Builder();
			builder.config(System.getConfig());
			return builder.bundle('test/data/test.css!', {minify: false, outFile: 'test/bundle.js'}).then((results) => {
				return expect(results.source).to.contain("body{background-color:red;background-image:url(test/data/x.png)}");
			});
		});

		it('Should compile css with rootURL', function() {
			// Run the happy path
			var builder = new Builder();
			builder.config(System.getConfig());
			builder.config({
				rootURL: './test'
			});
			return builder.compile('test/data/test.css!', {minify: false}).then((results) => {
				return expect(results.source).to.contain("body{background-color:red;background-image:url(/data/x.png)}");
			});
		});

		it('Should support buildCSS: false', function() {
			var builder = new Builder();
			builder.config(System.getConfig());
			builder.config({ buildCSS: false });
			return builder.bundle('test/data/test.css!', {minify: false}).then(function(results) {
				return expect(results.source).to.equal('');
			});
		})

		it('Should support separateCSS: true and sourceMaps: false', function() {
			var builder = new Builder();
			builder.config(System.getConfig());
			builder.config({ separateCSS: true });
			return builder.bundle('test/data/test.css!', {sourceMaps: false, minify: false, outFile: 'test/bundle.js'}).then((results) => {
				return expect(results.source).to.contain("test/data/test.css!css.js");
			});
		})
	});
});
