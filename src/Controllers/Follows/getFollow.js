const { Follow, User } = require("../../DataBase");

const getFollow = async (req, res) => {
  try {
    const foundFollow = await Follow.findAll({
      attributes: { exclude: ["UserId"] },
      include: [
        {
          model: User,
          as: "follower",
        },
        {
          model: User,
          as: "following",
        },
      ],
    });

    return res.status(200).json(foundFollow);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getFollow;
