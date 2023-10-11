const { User } = require("../../DataBase");

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "No se proporciono ID!" });
    }

    const userFound = await User.findByPk(id);

    if (!userFound) {
      return res
        .status(404)
        .json({ message: "No existe un usuario con ese ID!" });
    }

    return res.status(200).json(userFound);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserById;
