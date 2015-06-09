module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		//'jst:dev',-->This task is quitte flaky. Only works if I explicitely re-install grunt-contrib-jst
		'less:dev',
		'copy:dev',
		'babelBuild',
        'browserify',
        'typescript',
		'coffee:dev'
	]);
};
