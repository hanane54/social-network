const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');

// here will be defined the methods handling
// the posts

/**
 * @route POST api/posts
 * @desc creates a new post using the POST method
 * @access Public
 */
router.post('/', async(request, response)=>{
    const newPost = new Post({
        postOwner:request.body.postOwner,
        postQuestion: request.post.postQuestion,
        postContent: request.body.postContent,
        postImage: request.body.postContent || null,
        postCategory: request.body.postCategory,
        isPublic: request.body.isPublic,
        comments:[],
        likers:[],
        date: new Date().getTime(),
    });
    try {
        const post = await newPost.save();
        return response.status(201).json(post);
    }catch(error){
        return response.status(400).send(error);
    }
});


/**
 * @route GET api/posts
 * @desc This method will retrieve all posts using the GET method
 * @access Private
 * 
 */
router.get('/' ,async(request, response)=>{
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

/**
 * @route PATCH api/posts/like/:id
 * @desc like a post using its ID
 * @access Private
 */
router.patch('/like/:id', (request, response)=> {
    const {id } = request.params.id;
    
    

    try{
        const post = await Post.findById(id);

        // we first of all need to see if the post 
        // is already liked by the current user or not
        if(post.likes.some((like)=> like.user.toString() === request.user.id)){
            return response.status(400).json({message: 'You already liked this post'});
        }
        post.likers.unshift({user: req.user.id});

        await post.save();
        return response.json(post.likers);

    } catch (error){
        console.log(error.message);
        response.status(500).send("Server has encountered an unexpected condition!");
    }
})


/**
 * @route PATCH api/unlike/:id
 * @desc Unlike a post
 * @access Private
 */
router.patch('/unlike/:id', (request, response)=> {
    try{
        const post = await Post.findById(request.user.id);
        if( (post.likers.map((liker) => liker.user.toString() === request.user.id)) ){
            return response.status(400).json({message: 'This post is not liked'});
        }
        
    } catch (error){

    }
})