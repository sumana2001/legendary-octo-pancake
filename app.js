const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("It's working!");
})

app.listen(3000);