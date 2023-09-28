const { Post } = require("../../DataBase");

const deletePostsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const deletedPost = await Post.destroy({
      where: {
        UserId: userId,
      },
    });

    if (deletedPost > 0) {
      return res
        .status(200)
        .json({ message: "Todos los posts del usuario han sido eliminados" });
    } else {
      return res
        .status(404)
        .json({ message: "No se encontraron posts para eliminar" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deletePostsByUser;
