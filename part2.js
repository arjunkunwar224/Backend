// Node js is not programming lang, framewrk, 
// node = chrome have v8 engine written in c++ at its outside wrapper layer of js is formed 
// node js is js runtime env 
// node = in runtime gives env for backend using js 
// npm = (package store) packges are uploaded which can be used for different purposes
// in node callback is always function

//1. npm init or npm init -y

// FILE SYSTEM 
// const fs = require('node:fs');

// 1. write
// fs.writeFile("hey.txt","i am learning backend",function(err){
//     if(err) console.error(err);
//     else console.log("Succesfully done");
//     })

// 2. append 

// fs.appendFile("hey.txt"," from sheryians class",function(err){
//     if(err) console.error(err);
//     else console.log("Succesfully done");
//     })

// 3. rename 
// fs.rename("hey.txt","Hello.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Succesfully done");
//     })
 
 // 4. copy file 
//  fs.writeFile("Hello.txt","hey.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Succesfully done");
//     })

// 5. unlink
// 6. rm

// fs how to read 


//  HTTP (protocol = set of rules)
// RULES OF internet should be followed so they come pre installed in 
// operating system s/w

const http = require('http');
 const server = http.createServer(function(req, res){
    res.end("hello world");
 })
 server.listen(3000);