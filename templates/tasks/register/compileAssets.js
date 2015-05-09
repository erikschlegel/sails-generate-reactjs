module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
8		'babelBuild',
9	    'browserify',
		'coffee:dev'
	]);
};
