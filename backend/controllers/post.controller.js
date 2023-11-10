const PostModel = require("../models/post.model");

//! Get Posts
module.exports.getPosts = async (req, res) => {
  const allPosts = await PostModel.find();
  res.status(200).json(allPosts);
};

//! Post Posts
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "merci de mettre sms" });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};

//! Edit Posts
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({
      message: "Ce post est édité",
    });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

//! Delete Posts
module.exports.deletePost = async (req, res) => {
  try {
    const result = await PostModel.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ message: "Post introuvable" });
    }

    return res.status(200).json({ message: "Post supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du post :", error.message);
    return res
      .status(500)
      .json({ message: "Erreur serveur lors de la suppression du post" });
  }
};

//! Like Post
module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(err);
  }
};

//! DisLike Post
module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => res.status(200).send(data));
  } catch (error) {
    res.status(400).json(err);
  }
};
