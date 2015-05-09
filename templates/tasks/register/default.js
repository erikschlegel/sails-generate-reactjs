module.exports = function (grunt) {
	grunt.registerTask('default', ['compileAssets', <%- linker ? "'linkAssets', " : '' %> 'watch']);
};
