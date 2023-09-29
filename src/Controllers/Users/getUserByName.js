const { User } = require("../../DataBase");

const getUserByName = async (req, res) => {
  try {
    const { userName } = req.params;

    const user = await User.findOne({
      where: {
        userName,
      },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: "No se encontró usuario con ese nombre" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserByName;
