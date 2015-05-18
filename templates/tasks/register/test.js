module.exports = function (grunt) {
	grunt.registerTask('test', [
		'mochaTest:test', 'compileAssets', 'linkAssets'
	]);
};