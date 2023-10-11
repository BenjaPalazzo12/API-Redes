const { Post, User } = require("../../DataBase");

const isValidURL = (url) => {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
};

const postPost = async (req, res) => {
  try {
    const { userId } = req.params;
    const { tittle, body, image, video } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    if (image !== undefined) {
      if (!isValidURL(image)) {
        return res.status(400).json({ message: "URL de imagen no válida" });
      }
    }

    if (video !== undefined) {
      if (!isValidURL(video)) {
        return res.status(400).json({ message: "URL de video no válida" });
      }
    }

    const newPost = await Post.create({
      tittle,
      body,
      image: image || null,
      video: video || null,
      status: true,
    });

    // Asigna el usuario al nuevo post
    newPost.UserId = user.id;

    // Guarda los cambios
    await newPost.save();

    return res
      .status(200)
      .json({ message: "Publicacion creada con exito", newPost });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postPost;
