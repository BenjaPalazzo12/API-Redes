const { Post } = require("../../DataBase");

const getPostByUser = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.params.userId;

    const post = await Post.findOne({
      where: {
        id: postId,
        UserId: userId,
      },
    });

    if (!post) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPostByUser;
