const { User } = require("../../DataBase");
const { validatePassword } = require("./validators");
const { encrypt } = require("./Handlers/handleCrypt");

const registerUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    if (!userName || !password) {
      return res.status(400).json({ error: "Faltan datos en las solicitud" });
    }

    if (userName.length < 6 || userName.length > 15) {
      return res
        .status(400)
        .json({ error: "El nombre debe tener entre 6 y 15 caracteres" });
    }

    const existUser = await User.findOne({
      where: {
        userName,
      },
    });

    if (existUser) {
      return res.status(400).json({ error: "Ya existe este usuario" });
    }

    const validateP = validatePassword(password);
    if (validateP.error) {
      return res.status(400).json(validateP);
    } else {
      if (!validatePassword(password)) {
        return res.status(400).json({
          message: "La contraseña debe contener letras y números",
        });
      }
    }

    const hashPassword = await encrypt(password);

    const newUser = await User.create({ userName, password: hashPassword });

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = registerUser;
