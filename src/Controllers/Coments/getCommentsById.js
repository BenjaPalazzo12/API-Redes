const { Comment, User, Post } = require("../../DataBase");

const getCommentsById = async (req, res) => {
  try {
    const { id } = req.params;

    const foundComment = await Comment.findOne({
      attributes: { exclude: ["UserId", "PostId"]},
      where: {
        id: id,
      },
      include: [
        {
          model: User,
        },
        {
          model: Post,
        },
      ],
    });

    if (!foundComment)
      return res.status(404).json({ message: "No existe este comentario" });

    return res.status(200).json(foundComment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCommentsById;
