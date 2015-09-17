[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/erikschlegel/sails-generate-reactjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

#### Overview
A `frontend` ReactJS generator for use with the Sails command-line interface. This bootstraps a full stack site using reactJS / Twitter Bootstrap, that enables you to spin up a modern stack web platform in a few commands. This repo comes bundled with Babel for converting ES6 components into ES5 compatible modules that can run across all browsers. This also ships with Browersify Grunt tasks to wrap all JS dependencies in a single JS file. 

#### Update your .sailsrc file
You'll need to configure Sails to use this extension for creating new Sails sites. This can be achieved by creating a file named `.sailsrc` in your home directory, or the parent directory of where you are creating projects. 
```json
{
    "generators" : {
        "modules" : {
            "frontend" : "sails-generate-reactjs"
        }
    }
}
```

### Installation
Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators. 

**Note** for Ubuntu environments, you'll need to run all the commands below as sudo(i.e. sudo npm install vs npm install).

##### On the command line
1. Install this package globally via NPM, and extends off the SailsJS baseline generator
```sh
$ npm install -g sails-generate-reactjs sails grunt-cli
```

2. This command will create your React Site
```sh
$ sails new <%-yourReactAppName> --force
```

3. Install your app's node modules locally
```sh
$ cd <%-yourReactAppName>
$ npm install
```

4. fire up your web app
```sh
$ sails lift
```
### Verifying a successful build

This package comes bundled with a starter Travis CI configuration file. You can use Travis CI to run your tests and build your app whenever a Git commit occurs. Getting started with [Travis](https://travis-ci.com/) is as easy as enabling your project on the travis portal, overriding the default .travis.yml config file and committing some code. Travis will automatically run your app's 'npm test' command and handle notifying your team the results of the build. 

### How to Test

Unit tests are powered by [Mocha](http://mochajs.org/), and are automatically triggered on every Git commit via Travis and whenever your sails site is lifted. The project comes packaged with [ESLint](http://eslint.org/), which can be easily configured and used to enforce valid javascript syntax and coding standards. A Grunt task(<i>called test</i>) runs all Mocha tests within the test folder of the project, while also verifying the site built successfully. You can explicitly run the unit tests by invoking the following command. 

By default Mocha runs all tests that are placed in the /test directory. You can change this by modifying the mocha grunt config in /tasks/config/mochaTest.js

```shell
$ npm test
```
### Configuring Package.json and Bower.json

This project has a feature where you can configure the bower and package.json template files, that's created when you run 'sails new'. 

```sh
vi ./templates/bower.ejs
```

```sh
vi /templates/package.ejs
```

### Roadmap
* Fix grunt tasks for production
* Integrate Protractor into this generator for front-end control testing, and Istanbul for code coverage reporting

### Questions?

Post questions/issues onto Gitter and I'll respond as soon as possible.

### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)

### License

**[MIT](./LICENSE)**
