module.exports = function(grunt) {
    var pipeline = require('../pipeline');

	grunt.config.set('shell', {
		es6To5: {			        
			        options: {
			            stdout: true,
     					stderr: true
			        },

			        command: 'babel ' + pipeline.es6To5SrcJSDir + ' --out-dir ' + pipeline.es6To5BuildPath
		}
	});

	grunt.loadNpmTasks('grunt-shell');
};