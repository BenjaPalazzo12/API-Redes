const { Share, Post, User } = require("../../DataBase");

const getShare = async (req, res) => {
  try {
    const shares = await Share.findAll({
      attributes: {
        exclude: ["UserId", "PostId"],
      },
      include: [
        { model: Post },
        {
          model: User,
        },
      ],
    });
    return res.status(200).json(shares);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getShare;
