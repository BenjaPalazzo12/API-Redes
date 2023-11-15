const { User } = require("../../DataBase");
const { compare } = require("./Handlers/handleCrypt");

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    let user;

    if (!userName) {
      return res.status(404).json({ message: "Este usuario no existe!" });
    }
    user = await User.findOne({ where: { userName } });

    if (user.deleted === true) {
      return res.status(403).json({ error: "Usuario Baneado" });
    }

    const checkPassword = await compare(password, user.password);

    if (checkPassword) {
      return res
        .status(200)
        .json({ message: "Sesion iniciada correctamente" , user});
    } else {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = loginUser;
