#JSCAMPBCN 2018- Day 2

##The Bumpy Road to Universal JavaScript (Johannes Ewald-jhnns)
- build web applications that can be executed both on client and server. 
- even with Node.js & virtual DOM libraries like React, this can be quite challenging.
- common obstacles and problems
- performance and security issues.

- What is universal JavaScript?
- Server side routing & Client Side Routing
- special type of web application.
- How does it work?
- Server renders int HTML, send to browser
- 1) Browser Performance
- 2) SEO
- 3) Error resilience: the website stays usable
- Universal Javascript can be challenging.

- From Spa to universal
- https://github.com/jhnns/bumpy.road-to-universal-javascript

- How does a SPA (single page application) look like?
- Webpack, Babel and React.

#### Challenge 1: nodejs browser 
- Use a bundler to streamline
- Use/ write isomorphic-fetch

#### Challenge 2: client-server gap
- client 1 user, DOM
- server multiple users, HTML string
- Solution: keep process stateless, maintian the app state for each request.
- Create two app entries, client and server entry.
- start.server.js and start.client.js
- hydrate to syncronise 

#### Challenge 3: Data Fetching
- on both client and server
- initial request (server)
- susequent request (client)
- Solution: node-fetch to fetch() API
- Cross origin proxied via own API
- server end up doing HTTP request against itself.

#### Challenge 4: Multiple renders 
- Multiple render passes untill all components are executed? No, separate data fetching from the rendering
- app state may contain user data.

#### Challenge 5: Redrehydrating process

- Big JS response size

#### Challenge 6:
- replace unnecessariuly big dependencies.
- initial state, intermediate state, final state: user clicks on something.
- nanohref capters <a> clicks reliability, to avoid full page request.

#### Challenge 7: Response screening
- awaiting for the initial HTML to arrive.
- client javascript can be send to client, steady.

- Further challenges
- Long-term caching. uyse webpack.assets-manifest
- Post, put, patch and delete (form method/method-override)
- 300, 400, 500 error code
- Authentication, cookies forward to client.

    
##Break Up With Your Frontend Monolith(Elisabeth Engel)
- boring, just 1 note.
- Microservice, all in one place, front-backend, microservices (seperation), frontend need api calls.
- 1 company= 1 website.
- /home /content /settings
- use different resources, new website.
- develop, run independently, technology agnostic, fast loading, native support, share basicsX, modularX, corporate IdentityX, smooth user interactionX.
- sharing basics, iframes, cms system.
- server side includes. 

##Rethinking Enterprise Architectures with Node.js (Kamil Myśliwiec)- creator of Nest.js
- Entities
- Be progressive
- Code: difficult to test and understand.
- Types are usefull. Give more information.
- USe Typescript to minimize problems and enjoy types of code. Reliable on content.
- Facade: input/output.

### Conclusions
- no eco-insistency.
- clear architecture (boilerplate and design specification)= not developer-friendly
- To solve, use: NESTJS. www.nestjs.com instead of Nodejs.
- modern patterns to Nodejs.
- NEST is not another framework, it is to make dev. lifes easier for Nodejs.
- it is a flexible framework.
- Low entry treshold, fully-featured.
- include testing facilities, reactive.
- build on nests sockets, (restAPI, microservices)
- compatibility.
- Nest = open source & driven by the community.

## Machine learning in the Browser (Lian Li- @chimney42)
- software engineer @container solutions.
- Machine learning enthusiast.
- Expert systems(input and rules- give output)
- Machine Learning (data= input and output- give rules)
- How machine learning learns?
- 1) By experience (of datapoints)
- 2) by repetition (of training iterations)

- Machine Learning in the browser:
- client-side input-function-: speed,availability, security. 
- Practical example: complementary colours (opposite colours).
- Human:input-function-output-desired output.
- ML: features-network- target (nodes, each is function in itself), prediction.
- The prediction is not yet ideal, you have to check with the target.

- CHECKLIST ML
- 1) create data
- 2) create network (prediction)
- 3) training to be able to need to do things
- profit.

- Tensorflow.js 
- it runs on the browser and you can use webGL. 
- Neural Network, not upper ML context. This is network only.
- Neural network= network of nodes, single service.
- The whole layer = tenser
- input tensor (3 input nodes)
- output tensor (2 output nodes)
- each note is connected to each note.
- Weights= properties of the node. Are the heart, determine what to weight.

- DENSE LAYER, calculate a value y=x1 X 21 ' x2 X w2
- Y = activationFunction(y)
- Y = y & bias

- training to optimize 
- Find metric
- make changes
- check metric for performance.
- optimizer. change weight so the loss is the smallest. This you do with slow publish grid.
- to find the minimum.
- https://github.com/chimney42/deeplearn-complementary-colors
- https:js.tensorflow.org
- https://github.com/Kulbear/deep-learning-nano-foundation/wiki
- hiring www.container-solutions.com/careers
- 

##Semantic, Searchable Webapps with Angular(Martin Splitt)
- Google helps people find your search with (google bots)
- This is how it used to be:- crawling: extracts content
- indexing: follows links
- Now website is indexed, and people might find your website.

- IMPORTANT: general lessons to all client-side frameworks.
- SPA
- ng name-rating, ng serve, ng build --prod
- Sourcecode: Google need specific info about content. Angular takes app root as example. Not specific enough.

- RENDERING
- use templates
- put data in
- markup
- dom (structured on the three)
- pixels

- This what we want:
- Crawling
- Rendering: extracts content
- Indexing: Following links, URL, img

- The web is large, over 160 trillion documents on the web. And still growing.
- Rendering costs resources.
- You can not do this cycle in one go.
- you need first sources available.
- static html right away: give all content at once.
- dynamic websites: render lateron.

## ALTERNATIVE
- This what we do:
- Crawling: extracts content
- Indexing: Following links, URL, img
- Rendering: later on.

- Angular unversal, server-side rendering, dynamic rendering.
- step 1: add dependencies.
- step 2: create the server (static, dynamic rendering)
- step 3: Build & Serve
- Also react, vue, Angular have server-side rendering available.

## 5 tips for better web apps
#### 1) Good URLS, URLS are your public API(bookmarks).
- dont use hash-based routing: example.com/#about, instead use example.com/about
- Use redirects to deprecate URLS, use proper redirects
- REDIRECT: if you move a page, don´t loose your audience. Server side or JS redirect.(301 or 302).
- Use 404/410 for removed content. If you delete a page, tell us not to index it. 
- Use <meta name="robots" content="noindex">
- Don´t put it in your initial markup by default. Not on every page.

- 1) initial get HTML
- 2) render info

#### 2)Use meaningful markup. 
- to help to understand the content.
- HTML is semantic markup language.
- User anchor tags and hrefs.
- <a href="/puppers"> More puppers</a>
- Use title, meta description & canonical URLS.
- What is the URL needed to be indexing?

#### 3)Respect HTTP/S status
- Avoid soft 404s
- 200= give content. Use 404 instead.
- use 410 if page is gone.
- Avoid sneaky 404s: use URL rewriting, do not hijack 404 logic, test in incognito window.(to make sure no service worker)
- Make sure for all routes, to work initially.
- Service workers makes it tricky. It still looks like it is working, but if another goes there, no service worker installed, get 404 link.
- Make sure to get your content serves on all routes.

#### 4)Use Structured Data
- Highlight your content
- structured data expresses meaning: article, book, course, dataset, event, fact check, job posting, etc.
- Add markup to your page. j.son LD
- <script type="application/ld'json">
- @ context, @type, name, imag, description


#### 5)Know the tools
- We help your test your content
- Mobile-friendly test
- look at source code to see what is rendering, look what is missing. 
- it is a great way to quickly check your site.
- It contains JS console logs.
- g.co/MobileFriendly

- Structured Data Testing Tool.
- Used to see as a sandbox to create some JSON-LD.
- Use it to verify your pages with Structured data.
- search.google.com/data testing tool
- 
- Search Console
- Keep an eye on your content
- Search quieries & warnings
- Indexed URLS, AMP status
- g.co/SearchConsole

- Tips summarized
- 1) Pay attention to good URLS
- 2) Use meaningful markup
- 3) use correct HTTP statuses
- 4) Add structured data where useful
- 5) Know the tools & use them.
- Do good stuff for the users.

##Service Workers + Web Assembly: Experience implementing a WebP decoder(Kenneth Christiansen)


##How does npm design(Jerry Gabra)

##How to Create 'Vuetiful' Data-Driven User Interfaces (Evan Schultz)