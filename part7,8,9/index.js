// npm init -y
// npm install express

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { isUtf8 } = require('buffer');
const { log } = require('console');
 
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.get('/', function(req, res){
    // res.send("just getting started")
    fs.readdir(`./files`, function(err, files){
       //  console.log(files); just to see files
    res.render("index.ejs",{files:files});
    })
});

app.get('/file/:filename', function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
      res.render('show.ejs', {filename: req.params.filename, filedata: filedata});
      // console.log(filedata) shoows data in hexa decimal format to convert it we use utf-8
    })
});

app.get('/edit/:filename', function(req, res){
  res.render('edit', {filename: req.params.filename});
    
});

app.post('/edit', function(req, res){ 
  // console.log(req.body);
  fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.New}`,function(err){

  res.redirect("/");
  })  
});

// should give name in index.ejs
app.post('/create', function(req, res){
   console.log(req.body)
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}`, req.body.details, function(err){
   res.redirect("/");
   });
});
app.listen(3000);


