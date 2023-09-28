const { Post } = require("../../DataBase");

const deletePosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deletePosts;
