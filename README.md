![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-reactjs

#### Overview
A `frontend` ReactJS generator for use with the Sails command-line interface. This bootstraps a full stack site using reactJS / Twitter Bootstrap, and can create/run a web platform in 3 commands. This repo comes bundled with Babel so ES6 components can be used across all browsers. This also ships with Browersify Grunt tasks to wrap all JS dependencies in a single JS file.

#### Update your .sailsrc file
You'll need to configure Sails to use this extension for creating new Sails sites. This can be achieved by creating a file named `.sailsrc` file in your home directory, or the parent directory of where you are creating projects. 
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

##### On the command line
1. Install this package globally via NPM, and extends off the SailsJS baseline generator
```sh
$ npm install -g sails-generate-reactjs
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

```

### Roadmap
* Fix grunt tasks for production
* Integrate Mocha and Protractor into this generator for continous integration testing
* Integrate Kuddo package so you have the option to deploy this app out to an Azure web server

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
&copy; 2014 [balderdashy](http://github.com/balderdashy) & [contributors]
[Mike McNeil](http://michaelmcneil.com), [Balderdash](http://balderdash.co) & contributors

[Sails](http://sailsjs.org) is free and open-source under the [MIT License](http://sails.mit-license.org/).
