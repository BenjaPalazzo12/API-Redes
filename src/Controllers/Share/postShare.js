const { Share, Post, User } = require("../../DataBase");

const postShare = async (req, res) => {
  try {
    const { PostId, UserId } = req.params;

    const postFound = await Post.findByPk(PostId);

    const userFound = await User.findByPk(UserId);

    if (!postFound) {
      return res
        .status(404)
        .json({ message: "No existe una publicacion con ese id" });
    }

    if (!userFound) {
      return res
        .status(404)
        .json({ message: "No existe un usuario con ese id" });
    }

    const newShare = Share.build();

    newShare.setPost(postFound);
    newShare.setUser(userFound);

    await newShare.save();

    return res
      .status(200)
      .json({ message: "La publicacion ha sido compartido con éxito" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postShare;
