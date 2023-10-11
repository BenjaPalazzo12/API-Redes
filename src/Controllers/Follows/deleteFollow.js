const { Follow } = require("../../DataBase");

const deleteFollow = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFollow;
