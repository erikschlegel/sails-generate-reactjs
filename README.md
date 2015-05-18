![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

#### Overview
A `frontend` ReactJS generator for use with the Sails command-line interface. This bootstraps a full stack site using reactJS / Twitter Bootstrap, and can create/run a web platform in a few commands. This repo comes bundled with Babel for converting ES6 components into ES5 compatible modules that can run across all browsers. This also ships with Browersify Grunt tasks to wrap all JS dependencies in a single JS file. 
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/erikschlegel/sails-generate-reactjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators. Note for Ubuntu environments, you'll need to run all the commands below as sudo(i.e. sudo npm install vs npm install).

##### On the command line
*1. Install this package globally via NPM, and extends off the SailsJS baseline generator
```sh
$ npm install -g sails-generate-reactjs
```

*2. This command will create your React Site
```sh
$ sails new <%-yourReactAppName> --force
```

*3. Install your app's node modules locally
```sh
$ cd <%-yourReactAppName>
$ npm install
```

*4. fire up your web app
```sh
$ sails lift
```
### How to Test

Unit tests are powered by [Mocha](http://mochajs.org/), and are automatically triggered on every Git commit via Travis and whenever your sails site is lifted. A lint task is also invoked on every code commit to verify a succesful build. A Grunt task(<i>called test</i>) runs all Mocha tests within the test folder of the project, while also verifying the site built succefully. You can explicitely run the unit tests by invoking the following command. 

```shell
$ npm test
```

### Roadmap
* Fix grunt tasks for production
* Integrate Protractor into this generator for front-end control testing, and Istanbul for code coverage reporting

### Questions?

See `FAQ.md`.

### More Resources

- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Twitter](https://twitter.com/sailsjs)
- [Professional/enterprise](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- <a href="http://sailsjs.org" target="_blank" title="Node.js framework for building realtime APIs."><img src="https://github-camo.global.ssl.fastly.net/9e49073459ed4e0e2687b80eaf515d87b0da4a6b/687474703a2f2f62616c64657264617368792e6769746875622e696f2f7361696c732f696d616765732f6c6f676f2e706e67" width=60 alt="Sails.js logo (small)"/></a>


### License

**[MIT](./LICENSE)**
