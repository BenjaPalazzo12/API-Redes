const { Post, User } = require("../../DataBase");

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: User, // Incluye la relación con el modelo User
    });

    if (!posts || posts.length === 0) {
      return res
        .status(404)
        .json({ message: "No hay posteos en la base de datos" });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllPost;
