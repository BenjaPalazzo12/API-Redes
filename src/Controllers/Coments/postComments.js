const { Comment } = require("../../DataBase");

const postComment = async (req, res) => {
  try {
    const { body, like } = req.body;
    const { PostId, UserId } = req.params; // Supongamos que se pasan como parte de los parámetros de la URL

    if (!body) {
      return res
        .status(400)
        .json({ message: "Falta agregar un cuerpo al comentario" });
    }

    // Crea el comentario y asocia UserId y PostId
    await Comment.create({
      body,
      UserId: parseInt(UserId), // Convierte a número si es necesario
      PostId: parseInt(PostId), // Convierte a número si es necesario
      like: like || null, // Si se pasa un valor like, asigna ese valor, de lo contrario, asigna null
    });

    return res
      .status(201)
      .json({ message: "Comentario creado con éxito"});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postComment;
