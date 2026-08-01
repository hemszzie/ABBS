const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.likePost = async (req, res) => {
  try {
    const { userId } = req.body;

    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(userId)) {
      post.likes.push(userId);
    }

    await post.save();

    res.json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.addComment = async (req, res) => {
  try {

    const { userId, text } = req.body;

    const post = await Post.findById(
      req.params.id
    );

    post.comments.push({
      user: userId,
      text,
    });

    await post.save();

    res.json(post);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  try {

    await Post.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Post deleted",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};