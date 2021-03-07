const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/',(req,res)=>{
    res.send("Posts!!");
});

router.post('/',async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const post1 = await post.save();
        res.send(post1);

    }
    catch(err){
        res.status(400).json({message: "ERROR!!!"});
    }

});

module.exports = router;