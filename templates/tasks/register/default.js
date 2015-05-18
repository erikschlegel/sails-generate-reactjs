module.exports = function (grunt) {
	grunt.registerTask('default', ['test', 'compileAssets', <%- linker ? "'linkAssets', " : '' %> 'watch']);
};
