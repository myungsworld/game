# Memory Game - Level 1

Learn:  
- push() 
- querySelector()   
- SetAttribute()    
- getAttribute()  
- appendChild()  
- Math.random()  
- sort()  
- For loops  
- createElement() 

nodejs는 DOM형식을 지원하지 않으므로 새로운 API를 받아야 한다 (ex. JSDOM)  
document relates to the DOM (Document Object Model) in a web browser.  
Node.js, however, is not browser Javascript. It is a server, much like PHP or Perl, and as such, you can't access the browser's DOM or do anything specific to browser-based Javascript.  
The closest you could get is using something like browserify to include Node.js modules in your client-side code.  
document is not defined in NodeJS, JavaScript doesn't have a default document global. Browsers provide one, but your Node.js code doesn't run in a browser, it runs in the Node.js  document is not defined. I'm using next.js. Please see my code below. Browse other questions tagged node.js reactjs next.js or ask your own question.  


