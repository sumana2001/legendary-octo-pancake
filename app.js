const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

const postsRoute = require('./routes/posts');
//Middlewares
app.use(express.json());
app.use('/posts',postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send("It's working!");
});


//Connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>
console.log("connected to db!")
);

//Connect to server
app.listen(3000,()=>console.log("Server is up!"));