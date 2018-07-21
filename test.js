/* TEST CODE 1
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
END CODE ONE*/

// TUTORIAL: https://gist.github.com/soheilhy/867f76feea7cab4f8a84
//EXPLANATION OF CODE 1
//`assert`= standard module that provides assertion functions.
// `calc` = calculator module.
// `describe`= creates a SUITE of test cases
//it contains 2 arguments describe(explanation of testcase, testcase function)
//Mocha passed a DONE object to test (.done)
// `it`= implements a test case.(here you implement the test)
//EXAMPLE: "add(1, 1) returns 2, and mul(2, 2) return 4."
// Call .done() after test is finished

/*TO CHECK- in TERMINAL
* to see list of directories:
* PS C: \Users\ Adriana.vile\ dev\ Mocha Testing\ Spikes > ls
* Directory: C: \Users\ Adriana.vile\ dev\ Mocha Testing\ Spikes

* Mode LastWriteTime Length Name
*-- -- -- -- -- -- -- -- - -- -- -- -- --
* d-- -- - 18 / 07 / 2018 16: 36 Calculator2
* d-- -- - 18 / 07 / 2018 16: 04 Mocha -
* a-- --18 / 07 / 2018 16: 14 283 Calculator.js

* To change directory to current folder "Calculator2"
* PS C: \Users\ Adriana.vile\ dev\ Mocha Testing\ Spikes > cd Calculator2

* TO run mocha- to test the test file
* PS C: \Users\ Adriana.vile\ dev\ Mocha Testing\ Spikes\ Calculator2 > mocha

* TEST OUTCOME: 
* Calculator Tests√ returns 1 + 1 = 2√ returns 2 * 2 = 4
* 2 passing(10 ms)
*/

//TEST CODE2
var assert = require('assert');

var calc = require('./calc.js');

describe('Calculator Tests', function () {
    describe('Addition Tests', function () {
        it('returns 1 + 1 = 2', function (done) {
            assert.equal(calc.add(1, 1), 2);
            done();
        });

        it('returns 1 + -1 = 0', function (done) {
            assert.equal(calc.add(1, -1), 0);
            done();
        });
    });

    describe('Multiplication Tests', function () {
        it('returns 2 * 2 = 4', function (done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });

        it('returns 0 * 4 = 4', function (done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });
    });
});
//END TEST CODE2
// EXPLANATION TEST CODE 2
// Create separate test cases for addition and multiplication in Calc.
//test Mocha in Terminal with `mocha`

//TEST FILE
/*PS C: \Users\ Adriana.vile\ dev\ Mocha Testing\ Spikes\ Calculator2 > mocha

Calculator Tests
Addition Tests
√ returns 1 + 1 = 2
√ returns 1 + -1 = 0

Multiplication Tests
√ returns 2 * 2 = 4
√ returns 0 * 4 = 4

4 passing(12 ms)
*/