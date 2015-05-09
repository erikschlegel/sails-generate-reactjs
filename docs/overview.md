# Sails Frontend Generator Overview

This generator creates asset files and directories as grunt configuration and tasks files. The grunt files handle the managing of client side assets in a sails projects.

## Generation of front end assets
The front end asset are simply copied over from this generators `/template` directory. They are placed in your sails projects at the `/assets` directory.

## Generation of Grunt Config and Task Files
There is another [sails genereator](https://github.com/balderdashy/sails-generate-gruntfile) that genereates a gruntfile that is configured to look for grunt config and tasks in a `/tasks/config` and `/tasks/register` directories respectively. Knowing this, the frontend generator will create a tasks folder and populate it with config and register directories that include the grunt files to set up configuation and registering tasks.

There are three tasks that are accessable to developers via the terminal. This is the default behavior for each one:

### sails lift
1. Empties out contents of the `/.tmp/public` folder. This folder is where sails looks to serve static assets and where all of your assets will be placed.
2. Takes HTML files from `/assets/templates` directory and precompiles underscore templates into a JST file. These precompiled templates are placed in `/.tmp/public/jst.js`
3. Takes an `importer.less` file found in `/assets/styles` and compiles your less files into css based on what's in this file. Having one less file importing all of your other less files is a convention that many front end developers use, and the name of this file can be changed in the `/tasks/config/less.js` file. The compiled css will be placed in `/.tmp/public/styles/importer.css'
4. Copies the rest of the assets, except coffeescript and less files, in the `/assest` directory into the `/.tmp/public` directory.
5. Compiles coffeescript files in `/assets/js` to javascript and places them in the `/.tmp/public/js` directory.
6. Automatically injects `<script>` and `<link>` tags into any HTML located in `/.tmp/public`, EJS or JADE file in `/views`.
The important thing to understand is that this asset injection should be placed in files that act as a layout file for your app. For single page apps this would be something like an `index.html` file and for apps that send server side views this should be something like a `layout.ejs` or `layout.jade` file. Usage for how to injet files is showin in `tasks/config/sails-linker.js` or can be found [here](https://github.com/Zolmeister/grunt-sails-linker). A more detailed description of this task can be found below.
7. Sets up a watch task that will run this entire task again if there are changes detected in the `/assets` directory or the `tasks/pipeline.js` file. This task is optimized so that instead of deleting entire directories and files, it just syncs changes that were made.

### sails build
1. Runs the exact same as sails lift from steps 1-4.
2. Links the same as sails linker but now all the links are relative. This is important since we will be generating a web accessable ready folder that has the ability to work as a standalone.
3. Deletes the `www` directory if it exists.
4. Copies the assets form `/.tmp/public` into a `www` directory. You now have a web accessable directory containing all assets. You can take this folder, open up index.html, and your client app will work. This is useful if you need to show clients the client side app without having to spin up a sails server.

### sails build --production
This is the same as sails build, except the assets are concatenated and minified.

## A Litte Bit More About Sails Linking

The sails linker can be a confusing concept at first glance, but it's really a simple notion. Lets take a look at a practical example of sails-linker being used in a project.

Lets say we are working on a single page app in our sails project. Since it is a single page app, when a user requests the root of our app, we want to send users an `index.html` file. With this file, the client will be responsible for rendering the page correctly. The first thing we want to do is create an `index.html` file in out `/assets` directory. Lets say its very simple and looks like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1">
    <titel></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
  </head>

  <body>
    <h1>My app!</h1>
  </body>
</html>
```

Ok, so we have our `index.html` and we want to start placing in our assets. The hard way would be to do it manually. This is not ideal, considering it really annoying having to remember to include or take away `<script>` or `<link>` tags everytime we create or delete a js or css asset. This is exaclty what sails linker is for. Instead of manually including assets, we simply include some comments that sails-linker looks for. It can then inject the relevent files into our `index.html` for us. By default, sails-linker looks for  `<!--STYLES-->` and `<!--STYLES END-->` for styles. For javascript, its `<!--SCRIPTS-->` and `<!--SCRIPTS END-->`. In jade template, sails-linker looks for  `// STYLES` and `// STYLES END` for styles. For javascript, its `// SCRIPTS` and `// SCRIPTS END`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <!-- link tags are going to be injected here -->
    <!--STYLES-->
    <!--STYLES END-->
  </head>

  <body>
    <h1>My app!</h1>

    <!-- script tags are going to be injected here -->
    <!--SCRIPT-->
    <!--SCRIPTS END-->
  </body>
</html>
```

```jade
doctype html
html
  head
    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible", content="IE-edge,chrome=1")
    title
    meta(name="description", content="")
    meta(name="viewport", content="width=device-width")

    //- link tags are going to be injected here
    // STYLES
    // STYLES END

  body
    h1 My app!

    //- script tags are going to be injected here
    // SCRIPT
    // SCRIPTS END
```

Let's say we have `assets/styles/main.css`, `assets/styles/a.js`,  and `assets/styles/b.js`. Given our setup, once we run `sails lift` our `index.html` will look like this.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">

    <!-- link tags are going to be injected here -->
    <!--STYLES-->
    <link rel="stylesheet" href="styles/main.css">
    <!--STYLES END-->
  </head>

  <body>
    <h1>My app!</h1>

    <!-- script tags are going to be injected here -->
    <!--SCRIPT-->
    <scripts src="js/a.js"></scripts>
    <scripts src="js/b.js"></scripts>
    <!--SCRIPTS END-->
  </body>
</html>
```

That is sails-linker in a nut shell. Of course all of this can be configured in `/tasks/config/sails-linker.js` and other important things such as file order, including and excluding certain files, and even adding other comment tags that sails-linker can look for can be found in `/tasks/pipeline.js` with the documentation there.






