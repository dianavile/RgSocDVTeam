#JSCAMPBCN 2018- Day1

## 1) Opening JSCamp 2018 (David Pich)
- This year Mozilla and NPM are Diversity(minority sponsors).
- 530 attendees, 50 countries.

## 2) Opening Keynote (Ashley Williams)
- Code of Conduct (jscamp.tech/code-of-content)

- (DANIEL MARKO) 
- Generalitat de Catalunya- smartCATALONIA (digital transformation to front-row strategy & future generation)
- BCN Mobile World Conference & JSCAMP 1st row of digital experience
- 5th Digital Hub in EU (15.000 startups to transform society)
- Zurich, Volkswagen, Nestly, Amazon, Facebook, King (diverse ecosystem)
- Talent is the key of success.
- Developing software to put new solutions to citizens- help society.
- Show society the power and knowledge of developers.
- The future is DIGITAL.

##  A Tale of Two Asyunc (Asley)
- works at Mozilla with Rust.
- Rust Bridge (education program_ loves teaching programming)
- Explore 2 languages: Nodje.js (JS) and Rust.
- Geneological Analysis: investigation into programming languages.
- What is the best first programming language?
- What are the best tool for the job?
- What do programming languages want?
- `Programming paradigms` solving (multiple) problems.
- The Paradigm Paradox `More is not better or worst, then less, it is just different-(Peter van Roy)

### The goal of Node.js
- `Asynchronous programming`
- C10K problem (http://www.kegel.com/c10k.html- 1999)
- Solution 1: Thread (leak, memory problems- nginx-apach) are expensive
- https://blog.webfaction.com/2008/
- Solution 2: The reactor problem (single threaded scripting language for a multi-threaded system)
- Callbacks is how I/0 should work
 ## Node.js has design goals:
 - 
- `Javascript` = ECMAScript syntax is relaxed to enable to serve easy to use scripting language.
- RUST: 1st class server-side language
- RUST= new programming language to runs fast,
- originally to replace C 
- Rust profiler, systems program language designed to empower developers of all kinds of developer to create great code.
- crates.io 
- Crate mio (lowest level I/O), Future (as JS Promises)
- Futures & MIO = TOKIO
- Should you write a webservice with language designt to write a browser? Yes. (Concurrency vs Memory)
- Overtime program works better with RUST then in C Language.
- The features of Rust makes improbable programs possible.
- Speed, Safety, Productivity.
- How, Why, Where.
- Rust is for beginners and Advanced programmers. 
#### Stages of learning
- 1 Survival (pre-rigours): blindly apply formalism, intuitive
- 2 Inqury (Rigorous): intense proper application of formalism
- 3 Sophistication (post-rigorous): return to intuition, with support of deeply understood formalism.
- JS is hard to maintain, with Rust no trade-off between performance and code.
- RUST = open source project.
- What is Node.js, JS, RUST want?
- RUST roadmap process: epic problems of scale, info overload and lack of managers.
- The web, Rust is result of Node.js.They respond to the problems based in the eco system.
- Lack of vision in JS and NodeJS.
- We need our Users to create a great product.
- Get more people involved, get more diverse feedback.
- Articulate vision.
- request for feedback from a wide range of people (even beginners).
- How to reach concenses in Huge scale.

## 3) Webpack- Building a Platform: Webpack and the Future (Sean Larkin, webpack maintainer)
- Webpack 4: the most groundbreaking set of changes for the future of webpack and our ecosystem! 
- Zero Config JS (#0CJS) movement
- Put developers first
- Legato: perform in a smooth, flowing, manner without gaps.
- TheLarkInn (github)

- How to build a platform?
- Webpack 4 Legato (first major version) sponsored by Trivago
- IMPROVEMENT1: Smaller and Faster Builds
- Faster builds= new graph, uglify parallel & caching out of box, new language ES6, new plugin
- Hooks are monomorphic (to rewrite entire plugin system) 

- Lazy compile for unique aps. 98 percent faster.
- https://aka.ms/webpack-000
- Smaller build= JSON Tree shaking
- IMPROVEMENT3: Build for developers
- 1) Lower barrier to developers
- 2) Extensibility
- 3) Zero Config (create own zero config)
- Production development (Mode= foundation for future)
- in browser debugging, small output size, fast code
- data.json (shows speed of )

- IMPROVEMENT2: Modernization
- implement module "type" arch
- import a file & use a js app.
- Drop Node.js V4 support
- Try webpack 4.
- Work with frameworks, like angular6, Vue, React etc.
- It works at microsoft, it works everywhere.
- Webpack is the kernel of frondend framework.

- Future (beyond 4.0)
- CSS, HTML as module type
- presets bring your own @Ocjs 
- fully persisting caching.
- multicore/multithreaded builds
- experimental module types to stable
- create api
- https://webpack.js.org/vote (roadmap)
- Webpack solves things (a platform) for developers.
- The underline kernal, the toolframe.
- VUE.js (based on nothing but developers only).
- Vue.js build on Webpack4.

- At Microsoft we use same tools, write same code, open source, not only solve for microsoft, but for coders as well

- PLATFORMS
- VS CODE, Typescript, Webpack, Github.
- No node.js, no package json.
- Use tools you love and improve them.
- How to build on any JS as a Platform?
- diagnostics inside the code editor directly.
- DEVELOP, DIAGNOSE, REDACT at minimal offer.
- Javascript Renaissance

To try
`yarn add webpack webpack.cli --dev`
`npm add webpack webpack.cli --sav dev`

## DEEP DIVE IN JS
- Questions about JS, Webpack, VUE

## 4) Rise above the Framework (Mike Hartington)
- 2011: 1 MVC application with Backbone, CSS, ES5.
- 2018: Many Frameworks & Config files

### NO MORE GLOBAL SCOPES
- Shadow DOM!
- Isolated component internals.
- CSS is scoped. 
- No more global simplified rules.
- http;//bit.ly/2L6QVWG
- `shadowroot` with innerHTML, or add another component. 
- append it to the body and call it.

### NO DYNAMIC VALUES
- use JS to modify CSS on element bases.
- update CSS classes in JS.

### Javascript.
- adding code the old way: script tags
- ES5 was guaranteed.

### ESNEXT
- Javascript moves fast
- build tools: new features, but today build tool fatigue.
Solutions:
`<script type= "model">`
- supports async/await
- supports classes.
- supports arrow functions.
- fetch, promises, map, set etc.
- BUT WHAT ABOUT OLDER BROWSERS? They use nomodel.
- `<script nomodel><\script>`

### COMPONENTS
- How to create components to;
- remove lock 
- ANGULAR: (from MVC to Component AngularJS directive)
- REACT: All components, all the time
- VUE
- tagname, functionality, implementation details.
### DIFFERENT FRAMEWORK, API
- Angular, React and Vue, are different framework, with different components.

### CUSTOM ELEMENTS
- Standards-based API
- Reusable components...natively
- No framework needed!


## 5) A Tale of Types, Classes, and Maps (Benedikt Meurer)
JavaScript = 
- the most influential technology in software engineering. 
- due to the sophisticated JavaScript engines 
- in modern browsers, Node, and Electron. 
- Explore ingredients of modern JavaScript engines &
- How these ingredients make it possible to write modern JavaScript applications.

## 6) Keep Betting On JavaScript (Kyle Simpson)
`Always Bet On JavaScript- Brendan Eich` 
- JS proved itself. Once a 'dumb kid brother' to Java, it's now a first class citizen in the programming language ecosystem.
- Most tech stacks have it as a central part of their strategy.

## JS in the past
- View Page Source
- Learning babysteps
- to understand how things are build.
- ES version1
- ES1/2
- ES3(1999; first updated version, closure)
- ES4(Java,AktionScript3)
- E4X (not ES4, early JSS)
- ES5(2009)small improvements, strict modes, object, clean up.
## JS at present JS at present
- ES6(ES2015)big step 
- ES2016(not =ES7), 2 extra features.
- ES2017 asynchronous,promise)
- ES2018 (async functions, async generators)
- Javascript is evolution of small babysteps

## JS in the future
- Open web technology
- HTML5, CSS3, PWA
- How to handle accesibility
- build in the open, from open collaboration

### JS language machine. What is happening?
- What is good for JS Language?
- What is good for JS machine(engine?)
- Those are two opposite galaxies.
- only look to baby steps, not very diverse.
- Is incremental, open, babysteps good to continue?

### JS The language
- Software dev is about human communication
- Code is about expression ideas to other human beings 
- `cdshmncmmnctn`= Code is human communication.
- You need to communicate about the code that is written,but also about what does not need to be written.
- JS = the `lingua franca`of the web = like a comment language. It is not a lesser form of communication.
- It is opening up a wider variety of people to bring together. 
- JS is the most important language ever invented.
- you can mix and match styles.
- JS is evolving into a more `declarative` code.
- compat (backwards compatibility). Old code, still runs today.

- Javascript is not:
- slow, sloppy, buggy, inconsistent.
- It is fasts evolving. It is a first class language and has its potential to be the most important languages, like:
- `class fields`
- `private fields`
- `optional catch binding`
- `readable numbers`
- `optional chaining`to improve speed.
- So, JavaScript has come a far way.

- But what about JS the Machine?
- `increased demands`
- `typedArray/DataView`
- `shared memory` 
- `Atomics`
- separation between `code and transpiler` (`Babel`)
- Only focussing on the tiny babysteps, without the main roadmap in sight, is not usefull.
- BUT: Too many layers of abstraction, that we loose sight of `viewsource`
- Sourcemaps: problems
- 1) stack traces
- 2) Watch expressions

- `Typescript` is a great tool to go between static and dynamic language.

- How JS language would be better read? Or How JS the language would be better run the browser too?
- ex. sweet.js, mode.js 

- Transforming the code onside the browser. 
- Compilers, transpilers.
- Framework= tool, that ships out compilers.

- So, a greater gap between both types of JS.
- Experimentation in the wild. Do not make your own extensions.
- `asm.js` shortcut a lot of JS 
- `WA` Web Assembly. Take language `Go` or `Rust` and transform into that The JS Engine can understand.
- Much faster, less parsing time.
- But it is based on types. Not regular JS, so WebAssambly is not compatible with VanillaJS.

- Nowadays, a new learner has to figure out many different parts.
- The tale of 2 JS (JS language), JS (machine).
- Dual direction of language.
- INSTEAD: `humans JS`

## 7) Understanding client side routing with Vue.js (Hassan Djirdeh)
- Fullstack Vue
- Vue = progressive JS
- it scales up and down (like JQUERY)
- approachable
- performance
- versatile 

- `Routing` = splitting app UI based on the rules 
- identifier to code of the in
- protocol (https), hostname, pathname
- Refresh pages, keep location in app
- bookmark the URL
- Maintain browser back/forward history
- ROUTING:
- 1) server side routing: client makes request to server on every URL change.
- a) first meaningful pain
- b) constistent SEO performance
- 2) client side routing:
- faster routing after Initial load
- smooth 
- Single-page applications (SPAs)

- UI changes, the entire app is available to the client.
- vue-router.

- source folder:
- app/
- components/
- router/
- RouterLink.vue (path links)
- RouterView.vue (dynamic components)
- Router
- ....
```
import Vue from "vue";
import App from "./App";

new Vue({
    el
})

data (){
    return {
    currentView: {]}
    }
}
```
### Vue components
- components
- webpack on Vue.App
- app.vue
- The pathname are the indicators of the components (the resources of the web)
- it returns object into router view.

- created() method.
- implement dynamic components.
- Not URL bar
- Why not anchor element. We do not want to make a web request. Just a single app. not a special link.
- props to compare data.
- `navigate`method.
- `pushState` takes 3 arguments: state object, title, target URL.

## RouterLink vs RouterView `created()
- `EventBus= new Vue()``event-bus.js import EventBus from "./event-bus";`
- important RouterLink
- define components (routerLink)
- The customer will be informed about the path change
- `popstate`= browserback or browserforward.
- VUE=
- declare the routes
- declare the router-view component
- declare the router-link.
- no need for custom files.
- export default const router. 