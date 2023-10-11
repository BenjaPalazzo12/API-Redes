const { PostLike, User, Post } = require("../../DataBase");

const getPostLikes = async (req, res) => {
  try {
    const foundPostLikes = await PostLike.findAll({
      attributes: { exclude: ["UserId", "PostId"] }, // Excluye los campos UserId y PostId
      include: [
        {
          model: User, // Alias opcional para el modelo User
        },
        {
          model: Post, // Alias opcional para el modelo Post
        },
      ],
    });

    return res.status(200).json(foundPostLikes);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPostLikes;
