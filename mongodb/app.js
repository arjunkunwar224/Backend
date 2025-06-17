// npm init -y
// npm i express
// npm i mongoose 
// mongoose helps in connection between node server and mongodb server 

// const express = require('express');
// const app = express();

// const userModel = require('./usermodel');

// app.get('/',(req,res)=>{
//     res.send("hello");
// })

// app.get('/create',async (req,res)=>{
//   let createduser = await userModel.create({
//         name:"arjun",
//         username:"arjun",
//         email:"ajj@gmail.com"
//     })
//     res.send(createduser)
// })
// // yesko o/p _id and __v aauxa 

// app.get('/update',async (req,res)=>{
//   let updateduser = await userModel.findOneAndUpdate({username:"arjun"},{name:"arjun Kunwar"},{new:true})
//     res.send(updateduser)
// })

// // here find will give array 
// app.get('/read', async (req,res) => {
//    let users = await userModel.find();
//     res.send(users);
// })

// app.get('/delete', async (req,res) => {
//     let del = await userModel.findOneAndDelete({username:"arjun"})
//     res.send(del);
// })
// app.listen(3000);

// UPPER PART IS OF PART 11

const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("Helo");
})

app.listen(3000);