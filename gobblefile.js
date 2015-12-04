var gobble = require('gobble');
var path = require('path');

/* -----------------------------
   This will create a single entry file
   that registers the components
   globally on Ractive */
function importComponent(code){
	var name = path.basename(this.src, '.html');
	var jsName = getName(name);
	return 'import ' + jsName + ' from "./' + name + '";\n' +
		   'Ractive.components.' + name + ' = ' + name + ';';
}

function getName(file) {
	return file.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

importComponent.defaults = {
	accept: ['.html'],
	ext: '.js'
};
/* ========== */

var components = gobble('components');

var register = components
	.transform(importComponent)
	.transform('concat', {
		dest: 'components.js',
		writeSourcemap: false
	})
	.transform(function(code){
		return 'import Ractive from "ractive";\n' + code;
	});

var componentsjs = components.transform('ractive', { type: 'es6' });

var bundle = gobble([componentsjs, register]).transform('rollup', {
  entry: 'components.js',
  // This is the name of the output file
  dest: 'bundle.js',
  // what type of module to create - can be one of
  // 'amd', 'cjs', 'es6', 'iife', 'umd'. Defaults to 'cjs'
  format: 'umd',
  globals: { ractive: 'Ractive' }
});

module.exports = bundle;
