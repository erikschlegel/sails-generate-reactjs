![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-frontend-angular


A `frontend` AngularJS generator for use with the Sails command-line interface. This generator creates client side assets and files with grunt configurations and tasks that manage the front end assets for a sails project. To see more infomation about how it works look [here](./docs/overview.md).


### Installation

Certain generators are installed by default in Sails, but they can be overridden.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators.


```sh
$ npm install -g sails-generate-frontend-angular
```

#### Update your .sailsrc file
If you want to use this when creating new sails projects, you will need to modify your `.sailsrc` file in your home directory, or the parent directory of where you are creating projects. 
```json
{
    "generators" : {
        "modules" : {
            "frontend" : "sails-generate-frontend-angular"
        }
    }
}
```
After this change, when you `sails new <project>` it will use `sails-generate-frontend-angular` by default.

### Production Usage

##### On the command line

```sh
$ sails new myApp
```

### Roadmap
* Fix grunt tasks for production
* Optional angular-classy support
* Optional Coffeescript support


### Development

To get started quickly and see this generator in action, run the `bin/index.js` script:

```sh
$ git clone YOUR_FORK_OF_THIS_REPO sails-generate-frontend-angular-fork
$ cd sails-generate-frontend-angular-fork
$ npm install
$ node ./bin
```

`bin/index.js` is a simple script, bundled only for convenience, that runs the generator with hard-coded scope variables.  Please feel free to modify that file however you like!  Also see `CONTRIBUTING.md` for more information on overriding/enhancing generators.



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
