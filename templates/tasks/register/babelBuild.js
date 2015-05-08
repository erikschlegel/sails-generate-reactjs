module.exports = function(grunt) {
    grunt.registerTask('babelBuild', ['clean:es6Build', 'shell:es6To5']);
};