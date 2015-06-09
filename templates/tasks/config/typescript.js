module.exports = function(grunt) {
	var pipeline = require('../pipeline');

	if(!pipeline.typescriptDir)
		return;

	grunt.config.set('typescript', {
		options: {
      		module: 'commonjs',
     	 	target: 'es5',
        },
		dist: {
			src: [pipeline.typescriptDir + '**/*.ts'],
			dest: pipeline.typescriptDir + 'dist/'
		}
	});

	grunt.loadNpmTasks('grunt-typescript-compile');
};