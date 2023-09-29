const { Post } = require("../../DataBase");

const deletePostByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const postId = req.params.postId;

    const deletedPost = await Post.destroy({
      where: {
        id: postId, // Eliminar solo el post con el ID especificado
        UserId: userId, // Y que tenga el UserID especificado
      },
    });

    if (deletedPost > 0) {
      return res
        .status(200)
        .json({ message: "El post ha sido eliminado exitosamente" });
    } else {
      return res
        .status(404)
        .json({ message: "No se encontró el post para eliminar" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deletePostByUser;
