const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

/**
 * @route    POST api/posts
 * @desc     Create a post
 * @access   Private
 *
 * les routes qui sont publiques ne nécessitent pas un token
 * on les rends private si on doit se connecter pour y accéder
 */
router.post(
  "/",
  [auth, [check("text", "Text is Required").not().isEmpty()]],
  async (req, res) => {
    const errorsArray = validationResult(req);
    if (!errorsArray.isEmpty()) {
      return res.status(400).json({ errors: errorsArray.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");

      const newPost = new Post({
        question: req.body.question,
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

/**
 * @route    GET api/posts
 * @desc     Get all posts
 * @access   Private
 *
 */
router.get("/", auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ data: -1 });
    // la fonction sort pour ordonner 
    // le plus récent sera le premier
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @route    GET api/posts/:id
 * @desc     Get post by id
 * @access   Private
 *
 */
router.get("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ msg: "This post is not found" });
    res.json(post);
  } catch (err) {
    console.error(err.message);

    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "This post is not found" });

    res.status(500).send("Internal Server Error");
  }
});

/**
 * @route    DELETE api/posts/:id
 * @desc     Delete post by id
 * @access   Private
 */
router.delete("/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ msg: "This post is not found" });

    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "This user is not authorized" });
    }

    await post.remove();

    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @route    PUT api/posts/like/:id
 * @desc     Like a post
 * @access   Private
 * *like
 */

router.put("/like/:id", auth, async (req, res) => {
  try {
    //get the post
    const post = await Post.findById(req.params.id);

    // On doit d'abord vérifier si la publication n'est déja liké
    // la fonction .filter renvoie les éléments qui vérifient la condition
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id).length >
      0
    ) {
      return res.status(400).json({ msg: "Post already liked" });
    }
    // la fonction unshift ajoute au début
    post.likes.unshift({ user: req.user.id });

    //on re-enregistre dans la base de données
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @route    PUT api/posts/unlike/:id
 * @desc     Unlike a post
 * @access   Private
 * *like
 */

router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (
      post.likes.filter((like) => like.user.toString() === req.user.id)
        .length === 0
    ) {
      return res.status(400).json({ msg: "Post has not been liked" });
    }
    const removeIndex = post.likes
      .map((like) => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);
    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

/**
 * @route    POST api/posts/comment/:id
 * @desc     Comment on a post
 * @access   Private
 * *comments
 */
router.post(
  "/comments/:id",
  [auth, [check("text", "Text is Required").not().isEmpty()]],
  async (req, res) => {
    const errorsArray = validationResult(req);
    if (!errorsArray.isEmpty()) {
      return res.status(400).json({ errors: errorsArray.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id,
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

/**
 * @route    DELETE api/posts/comment/:id/:comment_id
 * @desc     Delete comment
 * @access   Private
 * *comments
 */

router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // pull out comment
    const comment = post.comments.find(
      (comment) => comment.id === req.params.comment_id
    );
    if (!comment) return res.status(404).json({ msg: "Comment not found" });

    // check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    const removeIndex = post.comments
      .map((comment) => comment.user.toString())
      .indexOf(req.user.id);

    post.comments.splice(removeIndex, 1);
    await post.save();
    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
