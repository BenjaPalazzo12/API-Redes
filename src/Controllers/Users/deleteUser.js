const { User } = require("../../DataBase");

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.update(
      { deleted: true },
      {
        where: {
          id,
        },
      }
    );
    return res.status(200).json({ message: "Usuario eliminado con exito!!!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
