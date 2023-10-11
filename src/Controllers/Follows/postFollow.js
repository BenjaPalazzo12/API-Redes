const { User, Follow } = require("../../DataBase");

const postFollow = async (req, res) => {
  try {
    const { followingId, followerId } = req.params; // Suponiendo que los IDs de los usuarios se pasan como parámetros

    // Verificar si el usuario que se va a seguir existe
    const followingUser = await User.findOne({
      where: {
        id: followingId,
      },
    });

    if (!followingUser) {
      return res
        .status(404)
        .json({ message: "Usuario a seguir no encontrado" });
    }

    // Verificar si ya existe una relación de seguimiento
    const existingFollow = await Follow.findOne({
      where: {
        followerId,
        followingId,
      },
    });

    if (existingFollow) {
      return res.status(400).json({ message: "Ya sigues a este usuario" });
    }

    // Crear una nueva relación de seguimiento
    await Follow.create({
      followerId,
      followingId,
    });

    return res.status(200).json({ message: "Siguiendo al usuario con éxito" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postFollow;
