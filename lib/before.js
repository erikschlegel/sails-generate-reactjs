/**
 * Module dependencies
 */

var _ = require('lodash'),
    fs = require('fs');

// Make _.defaults recursive
_.defaults = require('merge-defaults');


/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

    //
    // scope.args are the raw command line arguments.
    //
    // e.g. if you run:
    // sails generate controlller user find create update
    // then:
    // scope.args = ['user', 'find', 'create', 'update']
    //
    _.defaults(scope, {
        // foo: scope.args[0]
    });

    //
    // Validate custom scope variables which
    // are required by this generator.
    //
    if (!scope.rootPath) {
        return cb(new Error(
            'Missing scope variable: `rootPath`\n' +
            'Please make sure it is specified and try again.'
        ));
    }

    // Delete existing .sailsrc as we are using our own.
    fs.unlinkSync(scope.rootPath + '/.sailsrc');
    
    // Delete existing layout template.
    fs.unlinkSync(scope.rootPath + '/views/layout.ejs');

    // Delete existing blueprints config as we need to make sure plural:true
    fs.unlinkSync(scope.rootPath + '/config/blueprints.js');

    //
    // Determine default values based on the
    // available scope.
    //
    _.defaults(scope, {
        currentTime: new Date()
    });

    //
    // Take multiple "passes" if necessary.
    //
    _.defaults(scope, {
        rootPath: scope.rootPath
    });

    //
    // Trigger callback with no error to proceed.
    //
    cb();
};