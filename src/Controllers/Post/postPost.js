const { Post, User } = require("../../DataBase");

const postPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { tittle, body } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const newPost = await Post.create({
      tittle,
      body,
      status: true,
    });

    // Asigna el usuario al nuevo post
    newPost.UserId = user.id;

    // Guarda los cambios
    await newPost.save();

    return res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postPost;
