const { Post } = require("../../DataBase");

const putPostByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const postId = req.params.postId;

    // Verifica si se proporciona un nuevo título o cuerpo en el cuerpo de la solicitud
    const { title, body } = req.body;
    const updateFields = {};

    if (title) {
      updateFields.title = title;
    }
    if (body) {
      updateFields.body = body;
    }

    if (Object.keys(updateFields).length === 0) {
      return res.status(400).json({
        error: "Debes proporcionar al menos un campo para actualizar",
      });
    }

    // Actualiza el post solo si coincide con el userId y postId
    const [updatedRows] = await Post.update(updateFields, {
      where: {
        id: postId,
        UserId: userId,
      },
    });

    if (updatedRows > 0) {
      return res
        .status(200)
        .json({ message: "El post ha sido actualizado exitosamente" });
    } else {
      return res
        .status(404)
        .json({ message: "No se encontró el post para actualizar" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putPostByUser;
