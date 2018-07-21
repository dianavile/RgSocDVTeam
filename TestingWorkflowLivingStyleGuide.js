/* HOW TO CREATE TEST FILES
To integrate JS test for an automated testing process:
* it need to be integrated with a:
* 1) taskrunner(ex.Jenkins, TeamCity, TFS, Mocha)
* 2) Continuous Integration server 
*/

//There are basically 2 ways:
/* TO BUILD JS into a webpage
   1) Use in -browser tests (=Jasmine)
 * 2) Use Jasmine test page to load and run the tests.
 */

/* TO BUILD JS Automated testing 
* 1) Taskrunner (=Mocha)
* 2) a Continuous Integration server (=build on NodeJS=.
    like (=Chai)
* WORKFLOW: 'Test Driven Development':
1) set up mocha + together with an assertion library
2) First: write test to verify if software is performing as you command
3) Second: write the code to verify testing.
*/

/*Requirements:
- Install Node JS: https: //nodejs.org/en/
- Install Mocha JS testing framework and the 'assert' assertion library(bundled with mocha)
  (Mocha is deployed as a Node Packaged Module(npm) package.)
- Windows, Linux or OSX
- Working in a CLI(Windows: Command Prompt or Cygwin.Linux / Mac: Bash)
- Working knowledge of Javascript - "Object Oriented" Javascript not essential
- Familiarity with Test Driven Development(TDD) is an advantage
*/

/*
BDD= (Behaviour Driven Development)- test style syntax:  'given... when... then...'
example: Jasmine (used in chai)
TDD= (Test Driven Development) -test style syntax:  'description...it...'
example: Mocha
*/

/* HOW to write Mocha test: methods & functions
* 1) Use "description() block. 
* 2) Add 'it'statements within each 'describe'
* 3) the anonymous function supplied to the 'it' arranges, acts & verifies the expectation through an assertion
* NOTE: assertion libraries = provide the semantic structure("look") of tests.
In TTD: only works with "assertion" 
In BDD: the principles work across to other libraries

* describe() = to document & group together the test suite and methods / scenarios *
* () = (parameter = string in summary view, can be anything.) *
* it(...) = function to call the tests.
* assertion = assert.equal(7, result);
 */


