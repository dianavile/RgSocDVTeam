# README Living Style Guide
['Living Style Guide'](https://speakerdeck.com/hagenburger/style-guide-driven-development) is `an important tool for modern web development, especially in large, complex web applications.`

`markdown`, `parser`, `markdown-it`, `documentation`, `docs`, `styleguide`, `livingstyleguide`, `designsystem`, `generator`.

## Project Description: 
[Living Style Guide](https://livingstyleguide.org/) is an __dynamic library DOC in an API__. 
 The `dynamic pattern library` document lives directly in the core Application (__API__) and details all elements, styles and coded modules of a site or application. It is: 
1) __independent__ 
2) __easy to use__ 
3) __maintainable__ 
4) It is __testable__

## Getting Started
Instructions to run project on local machine (for development and testing):

### __STEP 1: Get a local copy of repository__
Choose one of the below options to get a local copy of the repository:
###### Option 1: Use SSH
```
git clone git@github.com/hagenburger/pimd.git
```
###### Option 2: HTTPS
```
git clone https://github.com/hagenburger/pimd.git
```
###### Option 3: Download
- Choose `Download` at [PIMP Repository](https://github.com/hagenburger/pimd) to download a zip file to your local computer.

### __STEP 2: Run app__
Go to the root folder to run the app:
```
cd pimd
```

## __STEP 3: Install Dependencies__
Before you can start with project development, you first need to install the software dependencies:

#### Option 1: Install and Execute with Yarn
Install with Yarn:  
```
yarn install
yarn start
```
#### Option 2: Install and Execute with npm
Install with npm:  
```
npm install
npm start
```
The following code dependencies need to be installed via `npm packages`: 

- [Markdown-It](https://www.npmjs.com/package/markdown-it)
- [JSDOM](https://www.npmjs.com/package/jsdom)

#### [MARKDOWN IT](https://www.npmjs.com/package/markdown-it)
Markdown parser done right. Fast and easy to extend.
Package is available through npm:
```
npm i markdown-it
```
1) Install Markdown-it on local computer. 
````
$ npm install markdown-it
````
2) Create new folder
````
$ mkdir markdown-it
$ cd markdown-it
````
3) Turn folder into a Markdown it
````
$ Markdown-it init
````
This will create a `markdown-it.json configuration file` and a packages folder, so your folder should now look like this:
````
markdown-it/
  packages/
  package.json
  markdown-it.json
````
#### [JSDOM](https://www.npmjs.com/package/jsdom)
jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js. 
The main goal is to  emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications. 
Package is available through npm: 
```
npm i jsdom
```
1) Install JSDOM on local computer. 
````
$ npm install jsdom
````
2) Create new folder
````
$ mkdir jsdom
$ cd jsdom
````
3) Turn folder into a Markdown it
````
$ jsdom init
````
This will create a `jsdom.json configuration file` and a packages folder, so your folder should now look like this:
````
jsdom/
  packages/
  package.json
  jsdom.json
````

## __STEP 4: Install DevDependencies__
- [Linter](https://www.npmjs.com/package/linter)
- [Lerna](https://www.npmjs.com/package/lerna)

#### [Lerna](https://www.npmjs.com/package/lerna)
Lerna __optimizes the workflow around managing multi-package repositories with git and npm.__ 
It splits up large codebases into separate independently versioned packages is extremely useful for code sharing. 
Package is available through npm:
```
npm i lerna
```
1) Install Lerna on local computer. 
````
$ npm install lerna
````
2) Create new folder
````
$ mkdir lerna-repo
$ cd lerna-repo
````
3) Turn folder into a Lerna repo
````
$ lerna init
````
This will create a `lerna.json configuration file` and a packages folder, so your folder should now look like this:
````
lerna-repo/
  packages/
  package.json
  lerna.json
````

#### [LINTER](https://www.npmjs.com/package/linter)
linter is a compiler to select code quality tools into one module.
Package is available through npm: 
```
npm i linter
```
1) Install JSDOM on local computer. 
````
$ npm install linter
````
2) Create new folder
````
$ mkdir linter
$ cd linter
````
3) Turn folder into a Linter
````
$ linter init
````
This will create a `linter.json configuration file` and a packages folder, so your folder should now look like this:
````
jsdom/
  packages/
  package.json
  jsdom.json
````

## Unit Testing
After all code dependencies are installed, do not forget to install the testing dependencies first. After that, you can start to run the application.

#### [Mocha](https://mochajs.org)
Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

To run Mocha’s tests, you will need GNU Make or compatible; Cygwin should work.

````
$ cd /path/to/mocha
$ npm install
$ npm test
To use a different reporter:

$ REPORTER=nyan npm test
````

##### Getting started

````
$ npm install mocha
$ mkdir test
$ $EDITOR test/test.js # or open with your favorite editor
````

In your editor:

````
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
````

Back in the terminal:

````
$ ./node_modules/mocha/bin/mocha

  Array
    #indexOf()
      ✓ should return -1 when the value is not present


  1 passing (9ms)
  
````

Set up a test script in package.json:

````
"scripts": {
    "test": "mocha"
  }
````

Run tests with:

````
$ npm test
````

#### [Chai JS](http://www.chaijs.com)
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
Chai is available for both node.js and the browser using any test framework you like. There are also a number of other tools that include Chai.

Node.js
Package is available through npm:

````
npm install chai
````

Recommend adding it to package.json devDependencies using a * as the version tag. This will ensure that you always have the most recent version after running npm install, which can be especially powerful when paired with a continuous integration tool.

````
"devDependencies": {
  "chai": "*",
  "mocha": "*"
}, "//": "mocha is our preference, but you can use any test runner you like"
````

Browser
Include the chai browser build in your testing suite.

````
<script src="chai.js" type="text/javascript"></script>
````

This will provide chai as a global object, or define it if you are using AMD.

The latest tagged version will be available for hot-linking at http://chaijs.com/chai.js. If you prefer to host yourself, use the chai.js file from the root of the github project. We recommend that you always use a version tag as your starting point, so the tag download list is the best place to start.

Currently supports all modern browsers: IE 9+, Chrome 7+, FireFox 4+, Safari 5+. Please note that the should style is currently not compatible with IE9.

If you want to know if your browser is compatible, run the online test suite.

## Development
### In Editor
1) Click (right mouse click) to folder `PIMD-master` on your local computer.
2) Choose Open with Terminal `GitGui` `GitBash` 
````
$ mkdir pimd-master
$ cd pimd-master
$ git init 
````

# Code Example
- Show what the library does.
- How does your project solve developers problem (see: code example).
- Show an obvious API
- Make code short and concise.

## Screenshots
Include logo/demo screenshot.

## Build status
- What is the build status of continuos integration?

##  Code style
Living Style Guide uses the [StandardJS](https://standardjs.com) style and [Common Mark](http://commonmark.org) for markdown.
## Deployment
Add additional notes about how to deploy this on a live system

How to use?
If people like your project they’ll want to learn how they can use it. To do so include step by step guide to use your project.

## Code Dependencies 
[Living Style Guide](http://www.livingstyleguide.org) is built with the dependencies listed below:

#### [LERNA](https://github.com/lerna/lerna)
Splitting up large codebases into separate independently versioned packages is extremely useful for code sharing. However, making changes across many repositories is messy and difficult to track, and testing across repositories gets complicated really fast.
To solve these (and many other) problems, some projects will organize their codebases into multi-package repositories (sometimes called monorepos). Projects like Babel, React, Angular, Ember, Meteor, Jest, and many others develop all of their packages within a single repository.
Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.
Lerna can also reduce the time and space requirements for numerous copies of packages in development and build environments - normally a downside of dividing a project into many separate NPM package. See the hoist documentation for details.

#### [JSDOM](https://github.com/jsdom/jsdom)
jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications. The latest versions of jsdom require Node.js v6 or newer. (Versions of jsdom below v10 still work with Node.js v4, but are unsupported.) As of v10, jsdom has a new API (documented below). The old API is still supported for now; see its documentation for details.

#### [MARKDOWN IT](https://github.com/markdown-it/markdown-it)
Markdown parser done right. Fast and easy to extend.

#### [MDURL](https://github.com/markdown-it/mdurl)
URL utilities for markdown-it parser.

#### [LINKIFY](https://github.com/SoapBox/linkifyjs)
Linkify is a small yet comprehensive JavaScript plugin for finding URLs in plain-text and converting them to HTML links. It works with all valid URLs and email addresses.

#### [ENTITIES](https://github.com/fb55/entities)
En- & decoder for XML/HTML entities.

#### [ARGPARSE](https://github.com/nodeca/argparse)
CLI arguments parser for node.js. Javascript port of python's argparse module (original version 3.2). That's a full port, except some very rare options, recorded in issue tracker.

#### [ESLINT](https://github.com/eslint/eslint)
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

* ESLint uses Espree for JavaScript parsing.
* ESLint uses an AST to evaluate patterns in code.
* ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.

## Contributing
Please read [CONTRIBUTING.md](https://github.com/your/project/contributors) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License. See [MIT-LICENSE](LICENSE.md) for details.

## Acknowledgments
Copyright 2018++ [Nico Hagenburger](https://github.com/hagenburger/). See MIT-LICENSE for details. Get in touch with [@hagenburger](https://twitter.com/hagenburger) on Twitter or [open an issue](https://github.com/hagenburger/pimd/issues/new).

* [ArtNerdNet](http://www.github.com/artnerdnet)
* [Diana Vilé](http://www.github.com/dianaviale)

## Articles 
- [StyleGuides](http://styleguides.io/).
- [Creating Style Guides- A List Apart article](http://alistapart.com/article/creating-style-guides).
