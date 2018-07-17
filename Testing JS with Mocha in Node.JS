#Testing JavaScript with Mocha in NodeJS
How to unit test Javascript? with Mocha 

## What is Mocha
[Mocha](https://mochajs.org/)= `a unittest frameworkfor [Node.js*(https://nodejs.org/en/). It makes asynchronous testing simple and fun.`

## Table of content
- [Requirements](#requirements)
- [Installation](#installation) 
_ [Configuration](#configuration) 
- [Usage](#usage)

## Requirements
- [Node JS](https://nodejs.org/en/)
-[Mocha JS testing framework](https://mochajs.org/) and the 'assert' assertion library (bundled with mocha)
- Windows, Linux or OSX
- Working in a CLI (Windows: Command Prompt or Cygwin. Linux/Mac: Bash)
- Working knowledge of Javascript - "Object Oriented" Javascript not essential
- Familiarity with TDD

###[Installation](#installation)
Step 1: Install [Node JS](https: //nodejs.org/en/)
- Let Node add its directory into the Path, to use it from any Command Window.

Step 2: Intall Mocha with `npm install mocha`
- npm installs Mocha as a Node Packaged Module. 
- Open a Terminal(command window) & Type in `mocha`to run mocha on a directory 

Step 3: Create a test case 
-By default, Mocha will run test.js in the current folder.
- Run Mocha test cases: `node_modules/mocha/bin/mocha test`

### Mocha Directories
- `--recursive ` = to find test in all sub-directories.
__NOTE:__ By default a 'test' directory has to exist to where it is run from.
                
Testing a Library
Let say, we have a calc.js file that implements addition and multiplication:

exports.add = function(i, j) {
	return i + j;
};

exports.mul = function(i, j) {
	return i * j;
}; 

Write a unit tests to ensure that there is no bugs in add and mul. 
We implement our test cases in test.js:

var assert = require('assert');
var calc = require('./calc.js');
// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
	// And then we describe our testcases.
	it('returns 1+1=2', function(done) {
		assert.equal(calc.add(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(calc.mul(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
});

Step 4: Create a failing class.
- Run mocha against it

Step 5: Change the assertion message to make it meaningful
An `assertion library` contains _result checking code to validate tests_.
In JavaScript, testing an assertion library is essential.
__NOTE: __ most testing frameworks come with one built in .

Step 6: Implement the function inthe main class to make it work
Step 7: Run moch to go green & commit if it does
In mocha, `green` = all passing tests & `red` = failing tests.
__NOTE: __If no test are defined for a method, it won't exercise the test function.


assert is a standard module that provides easy-to-use assertion functions. calc is our calculator module.

describe creates a suite of test cases, and it implements a test case. The first argument to it is an explanation of the test case, and the second parameter is the test case function to which Mocha passes a done object. done should be called whenever the test case is finished. Inside the test case function, you should implement your test. For example, we have checked that add(1, 1) returns 2, and mul(2, 2) return 4.

Now, if you run Mocha you should see the following output:

# node_modules/mocha/bin/mocha test


  Calculator Tests
    ✓ returns 1+1=2
    ✓ returns 2*2=4


  2 passing (6ms)
Usually we test much larger applications, and we need a better categorization for our test cases. For that reason, you can embed a describe in another describe. For instance, if we want to have separate test cases for addition and multiplication, we implement test.js as follows:

var assert = require('assert');

var calc = require('./calc.js');

describe('Calculator Tests', function() {
	describe('Addition Tests', function() {
		it('returns 1 + 1 = 2', function(done) {
			assert.equal(calc.add(1, 1), 2);
			done();
		});

		it('returns 1 + -1 = 0', function(done) {
			assert.equal(calc.add(1, -1), 0);
			done();
		});
	});

	describe('Multiplication Tests', function() {
		it('returns 2 * 2 = 4', function(done) {
			assert.equal(calc.mul(2, 2), 4);
			done();
		});

		it('returns 0 * 4 = 4', function(done) {
			assert.equal(calc.mul(2, 2), 4);
			done();
		});
	});
});
For this test.js, you should get the following output:

# node_modules/mocha/bin/mocha test

  Calculator Tests
    Addition Tests
      ✓ returns 1 + 1 = 2
      ✓ returns 1 + -1 = 0
    Multiplication Tests
      ✓ returns 2 * 2 = 4
      ✓ returns 0 * 4 = 4


  4 passing (6ms)

### Testing a Server
You need to run the server automatically to be able to test. After all, unit tests are all about automation.
1) Write a simple HTTP server that echos 'Hello, Mocha!' when we send a get request to /:
```
var http = require('http');
```
```
// This is just an example HTTP server. Use your own application here.
var server = http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello, Mocha!');
});

// listen strats the server on the given port.
exports.listen = function(port) {
	console.log('Listening on: ' + port);
	server.listen(port);
};

// close destroys the server.
exports.close = function() {
	server.close();
};
```
NOTE: `export` the functions to __start__ and __stop__ the server. 
Here, we have exported listen(port) and close().

Implement test.js:
```
var http = require('http');
var assert = require('assert');

var server = require('./server.js');

describe('HTTP Server Test', function() {
	// The function passed to before() is called before running the test cases.
	before(function() {
		server.listen(8989);
	});

	// The function passed to after() is called after running the test cases.
	after(function() {
		server.close();
	});

	describe('/', function() {
		it('should be Hello, Mocha!', function(done) {
			http.get('http://127.0.0.1:8989', function(response) {
				// Assert the status code.
				assert.equal(response.statusCode, 200);

                                var body = '';
				response.on('data', function(d) {
					body += d;
				});
				response.on('end', function() {
					// Let's wait until we read the response, and then assert the body
					// is 'Hello, Mocha!'.
					assert.equal(body, 'Hello, Mocha!');
					done();
				});
			});
		});
	});
});
```

before and after are the functions you can use to run a code before starting and after finishing all testcases in your suite. 
In our example, we start run the server on port 8989 in before, and close it in after.

To check if the server is running:
1) Send a get request using http.get()
2) Read the response
3) Check if the server echoed 'Hello, Mocha!'


### SUMMARY
1) Download Node JS if you don't have it
2) npm mocha
3) Create your test class
4) Create a "failing" class and run mocha against it
5) Change the assertion message to make it more meaningful
6) Implement the function inthe main class to make it work
7) Run mocha to go green & commit if it does

### Resources
- [Mocha & Node.js](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)
- [Mocha](https://mochajs.org/)
- [Node.js*(https://nodejs.org/en/)
- [JS testing with Mocha](https://www.codementor.io/etharalali/js-testing-with-mocha-101-7mm3pmhoi)
