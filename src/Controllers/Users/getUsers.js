const { User } = require("../../DataBase");

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ error: "No hay usuarios en su Base De Datos" });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUser;
