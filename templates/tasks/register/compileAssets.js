module.exports = function (grunt) {
	
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'babelBuild',
    	'browserify',
		'coffee:dev'
	]);
};
