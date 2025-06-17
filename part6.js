// initailize a project with npm == npm init -y
// install express == npm install express

//2. dynamic routing
// how to get data coming from frontend at backend route 

// 3.setting up parser or form 
// 4.setting up ejs for ejs pages 
  // 4.1 install ejs from npm 
  // 4.2 setup ejs as view engine 
// 5.setting up public static files

// express setup
const express = require('express');
const app = express();

const path = require('path'); // using path module for path.join


// middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public'))); // to use html, css , js 
app.set('view engine', 'ejs'); // 4.2 what backend will render is ejs pages 

app.get('/', function(req, res){
    // res.send('i am running');
    res.render('index.ejs');
});

// for dynamic routing
// app.get('/author/:username', function(req, res){ // frontend -> backend
//   req.params.username // jo sanga colon xa use this line 
//   res.send('creating my own route');
// });

app.get('/author/:username', function(req, res){ // frontend -> backend
  res.send(`Welcome ${req.params.username}`);
});

app.get('/author/:username/:age', function(req, res){ // frontend -> backend
  res.send(`Welcome,${req.params.username} of age ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("Its running");
})

// ejs is similar to html also we can do calculation in ejs 
// install ejs as -> npm i ejs 

// for this we have to create a [views folder] and inside it we have created [index.ejs file] 
// and it is render 

//__dirname give path to currently working folder -> console.log(__dirname )

// Now dynamic routing 

// author/arjun
// author/arju
// author/arjuna
// author/arjunaaa

// here name part is dynamic so to make route dynamic use colon: 