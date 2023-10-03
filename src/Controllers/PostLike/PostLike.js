const { User, Post, PostLike } = require("../../DataBase");

const likePost = async (req, res) => {
  try {
    const { userId, postId } = req.params;

    // Verifica si el usuario ya dio "like" al post
    const existingLike = await PostLike.findOne({
      where: {
        UserId: userId,
        PostId: postId,
      },
    });

    if (existingLike) {
      return res
        .status(400)
        .json({
          error: "El usuario ya dio like a este post",
          like: existingLike,
        });
    }

    // Crea una nueva entrada en PostLike para registrar el like
    await PostLike.create({
      UserId: userId,
      PostId: postId,
    });

    // Incrementa la cantidad de likes en el post
    const post = await Post.findByPk(postId);

    if (post) {
      await post.increment("likeCount");
      return res.status(200).json({ message: "Like agregado con éxito" });
    } else {
      return res.status(404).json({ error: "El post no se encontró" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = likePost;
