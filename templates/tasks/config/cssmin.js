/**
 * Compress CSS files.
 *
 * ---------------------------------------------------------------
 *
 * Minifies css files and places them into .tmp/public/min directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;

	grunt.config.set('cssmin', {
		dist: {
			src: ['.tmp/public/concat/production.css'],
			dest: '.tmp/public/min/production.' + version + '.min.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
