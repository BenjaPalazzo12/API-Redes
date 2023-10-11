const { User } = require("../../DataBase");
const { encrypt, compare } = require("./Handlers/handleCrypt");

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await User.findByPk(id);

    const passwordMatch = await compare(currentPassword, user.password);

    if (!passwordMatch) {
      return res
        .status(400)
        .json({ error: "La contraseña actual no es válida" });
    }

    const hashedNewPassword = await encrypt(newPassword);

    user.password = hashedNewPassword;
    await user.save();

    return res
      .status(200)
      .json({ message: "Contraseña actualizada con éxito" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updatePassword;
