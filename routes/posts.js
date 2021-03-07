const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

//Gets back all the posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json({ message: "ERROR!!!" });
  }
});

//Submit a post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newPost = await post.save();
    res.send(newPost);
  } catch (err) {
    res.status(400).json({ message: "ERROR!!!" });
  }
});

//Gets back a specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.status(400).json({ message: "ERROR!!!" });
  }
});

//Delete a specific post
router.delete("/:postId", async (req, res) => {
    try {
      const deletedPost = await Post.remove({_id: req.params.postId})
      res.json(deletedPost);
    } catch (err) {
      res.status(400).json({ message: "ERROR!!!" });
    }
  });

//Update a specific post
router.patch("/:postId", async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id:req.params.postId}, 
            {$set: {title: req.body.title}}
        );
        res.json(updatedPost);

    } catch(err){
        res.status(400).json({ message: "ERROR!!!" });
    }
})

module.exports = router;
