var bower = require('bower'),
    fs = require('fs');

module.exports = function after(scope, cb) {
    bower.commands
        .install(null, {}, {
            cwd: scope.rootPath
        })
        .on('end', function() {
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
};