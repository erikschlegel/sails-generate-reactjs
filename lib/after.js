/**
 * Module dependencies
 */
var bower = require('bower'),
    fs = require('fs'),
    exec = require('child_process').exec;

    var npmGlobalPackages  = ['babel'];
    var windowsOS = (process.platform.toLowerCase().lastIndexOf('win')>-1);

module.exports = function after(scope, cb) {
    bower.commands
        .install(null, {}, {
            cwd: scope.rootPath
        })
        .on('end', function() {
            console.log('Bower Install finished');
            var destination = scope.rootPath + '/assets/vendor';
            try {
                fs.renameSync(fs.realpathSync(scope.rootPath + '/bower_components'), destination);
            } catch(ex) {
                cb.log.error('Couldn\'t move bower_components folder to ' + destination + ', try running `bower install`.');
            }
            cb.log.info('Bower done installing components to ' + fs.realpathSync(destination));
            cb();
        })
        .on('error', function(err) {
            cb.log.error('Bower error: ' + err);
        });
      
    //install the node packages
    console.log(scope.sailsRoot);
    console.log('Installing packages ' + npmGlobalPackages.join(", "));
     var npmInstallCmd = (!windowsOS?'sudo ':'') + 'npm install -g ' + npmGlobalPackages.join(" ");
         child = exec(npmInstallCmd, {cwd: scope.rootPath}).stderr.pipe(process.stderr);
     console.log('Finished');
};
