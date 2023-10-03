const { Comment, User, Post } = require("../../DataBase");

const getComments = async (req, res) => {
  try {
    const foundComments = await Comment.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Post,
        },
      ],
      attributes: { exclude: ["UserId", "PostId"] },
    });

    return res.status(200).json(foundComments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getComments;
