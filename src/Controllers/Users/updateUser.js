const { User } = require("../../DataBase");

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, deleted } = req.body;

    const updateUser = await User.findByPk(id);

    if (!updateUser) {
      return res.status(404).json({ message: "No hay usuario con ese ID" });
    }

    // Verifica si userName se proporcionó en la solicitud
    if (userName !== undefined) {
      updateUser.userName = userName;
    }

    if (deleted !== undefined && deleted !== "") {
      updateUser.deleted = deleted;
    }

    if (updateUser.changed()) {
      await updateUser.save();
      return res
        .status(200)
        .json({ message: "Usuario actualizado con éxito!" });
    }
    return res.status(200).json({ message: "No hubo cambios para actualizar" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
