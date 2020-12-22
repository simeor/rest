const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// /posts...

// all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts)
  } catch(err) {
    res.json({msg: err})
  }
});


// submit a post
router.post('/', async (req,res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch(err) {
    res.json({msg: err})
  }
});

// get back a specific post
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
  }catch(err) {
    res.json({msg: err})
  }
});


// delete a specific post
router.delete('/:postid', async (req,res) => {
  try{
    const removed = await Post.remove({_id: req.params.postid});
    res.json(removed)
  }catch(err){
    res.json({msg: err})
  }
});

router.patch("/:postId", async (req,res) => {
  try {
  const updated = await Post.updateOne(
    {_id: req.params.postId},
    {$set:{title: req.body.title}}
    );
     res.json(updated)
  }catch(err){
    res.json({msg: err });
  }

});


module.exports = router;
