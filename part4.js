// Express js framework 
// express js is npm package 
// framework -> gives flow in which you have to work 
// express js manages everything from recieving the request and giving the reponse

// first of all install express as (npm install express)

const express = require('express')
const app = express()

app.use(function(req, res, next){  // before evry req this will ex at first 
     console.log("Middleware running");
     next(); 
}); 

// app.get(route,request handler)
app.get('/', function(req, res){
    res.send('Hello world');

});

// to get execute below code you have to ctrl c and again execute it but 
app.get('/pro', function(req, res,next){
    // res.send('waving hello');
    return next(new Error("Not implemented")) // will be shown in console

});

// to avoid this recurring process we can use nodemon as -> npm i nodemon -g (global install)
// to run using nodemon -> nodemon script.js / npx nodemon script.js 

// error handling code (we can get it from express js documentation)
// and for this error hndling code we have to add return next() in last function abive this
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('something went wrong'); // seen in frontend 
})
// to check this work or not in /pro route 

app.listen(3000);



// facebook.com/(domain part) profile ->(route)
// MIDDLEWARE 
// anything we perform before route 
// server req accept -> from here to reach route if we stop these req and 
// perform anything then it is middleware 
// server -> Middleware -> route


// error handling 
// should be used at last i.e before app.listen
