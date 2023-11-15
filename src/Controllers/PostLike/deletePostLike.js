const { PostLike } = require("../../DataBase");

const deletePostLike = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "No se proporciono ID!" });
    }

    const postFound = await PostLike.findByPk(id);

    if (!postFound) {
      return res
        .status(404)
        .json({ message: "No hay publicaciones con ese ID!" });
    }

    await PostLike.destroy({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: "Like borrado con exito" });
    
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deletePostLike;
