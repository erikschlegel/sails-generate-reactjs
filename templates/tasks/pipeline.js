var fs = require('fs');
var path = require('path')
/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */

// BROWSERIFY main file path
// Browserify task work before copying the files in the .tmp folder
// so the path sould be something like .tmp/public/js/app.js
// just change assets/ for .tmp/public/ and then the same path as always
var browserifyMainFile = 'assets/js/app.js';

//This is the path which tyhe bablify task will look to for transcompiling ES6->ES5
var es6To5SrcJSDir     = 'api/components/es6+';
var es6To5BuildPath    = 'assets/js/build/';
var appRootDir = browserifyMainFile.substring(0, browserifyMainFile.lastIndexOf('/'));
 
// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/**/*.js',

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/**/*.js'
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
// Browserify main file path
module.exports.browserifyMainFile = browserifyMainFile;
module.exports.es6To5SrcJSDir = es6To5SrcJSDir;
module.exports.es6To5BuildPath = es6To5BuildPath;
module.exports.appRootDir = appRootDir;