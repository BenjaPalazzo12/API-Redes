const { Post } = require("../../DataBase");

const getPost = async (req, res) => {
  try {
    const post = await Post.findAll();

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getPost;
