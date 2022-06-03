const express = require("express")
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');

// here will be defined the methods handling
// the posts


/**
 * @route GET api/posts
 * @desc This method will retrieve all posts using the GET method
 * @access Private
 * 
 */
router.get(async(request, response)=>{
    try{
        const posts = await Post.find().sort({date: -1});
        response.json(posts);
    } catch (error) {
        response.status(500).send('Server has encountered an unexpected condition!')
        console.log(error);
    }
});

/**
 * @route GET api/posts/:id
 * @desc gets/retrieves the post by ID
 * @access Private
 */
router.get(async(request, response)=>{
    try{
        const post = await Post.findById(requeste.params.id);
        if(post==null){
            return response.status(404).json({message: "Resource not found"});
        }
        response.json(post);
    }catch(error){
        console.log(error.message);
        response.status(500).send("Server has encountered an unexpected condition!")
    }
})


/**
 * @route DELETE api/posts/:id
 * @desc deletes a post by its ID
 * @access Private
 */
router.delete(async(request, response)=> {
    try{
        const post = await Post.findById(req.params.id);
        if(post==null){
            return response.status(404).json({message: "Resource not found"});
        }
        await post.remove();
        response.json({message: "Post removed"})
    } catch (error){
        response.status(500).send("Server has encountered an unexpected condition!");
    }
});