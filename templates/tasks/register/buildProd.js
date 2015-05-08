module.exports = function (grunt) {
	grunt.registerTask('buildProd', [
		'compileAssets',
		'concat',
        'browserify',
		'uglify',
		'cssmin',
		'linkAssetsBuildProd',
		'clean:build',
		'copy:build'
	]);
};
