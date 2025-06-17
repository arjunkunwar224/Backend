// form hamdling and working with forms 
// hamdle backend process of forms and making sure the data coming from any frtned
// lib,fw, templating engines we still have to handle it at the backend

// install cookie-parser

//ccokie = data that is saved in frontend 
// session = duration from login to logout 
// blob =  unreadable stream (but this term is mainly used in binary form)
// the data that we sent into server is not in  the form we write(plain) it is sent as stream

const express = require('express');
const app = express();

// to make data readable 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

