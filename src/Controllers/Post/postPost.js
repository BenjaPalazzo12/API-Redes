const { Post, User } = require("../../DataBase");

const postPost = async (req, res) => {
  try {
    const { tittle, body, userId } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    const newPost = await Post.create({
      tittle,
      body,
      status: true,
    });

    await user.addPost(newPost);

    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postPost;
