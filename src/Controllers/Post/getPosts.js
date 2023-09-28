const { Post } = require("../../DataBase");

const getPostsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const posts = await Post.findAll({
      where: {
        UserId: userId,
      },
    });

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPostsByUser;
