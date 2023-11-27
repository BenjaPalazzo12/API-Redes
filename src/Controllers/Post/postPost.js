const { Post, User } = require("../../DataBase");
const AWS = require("aws-sdk");
const axios = require("axios"); // Agregamos el módulo axios
const s3 = new AWS.S3({
  accessKeyId: "",
  secretAccessKey: "",
});

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

    if ((video && !isValidURL(video)) || (image && !isValidURL(image))) {
      return res
        .status(400)
        .json({ message: "URL de imagen o video no válida" });
    }

    if (video || image) {
      const type = video ? "video" : "image";
      const url = video ? video : image;

      // Descargar el archivo desde la URL
      const { data: fileStream } = await axios.get(url, {
        responseType: "stream",
      });

      // Wrap s3.upload en una promesa
      const uploadToS3 = () => {
        return new Promise((resolve, reject) => {
          const timestamp = new Date().getTime();

          const paramsPut = {
            Bucket: "apiredes",
            Key: `images/${type}_${timestamp}`, // Cambia esto a un nombre único
            Body: fileStream,
          };

          s3.upload(paramsPut, (err, data) => {
            if (err) reject(err);
            else resolve(data);
          });
        });
      };

      // Espera la subida a S3
      const data = await uploadToS3();
      console.log(data);

      // Continúa con la creación de la publicación después de subir el archivo
      const newPost = await Post.create({
        tittle,
        body,
        image: type === "image" ? data.Location : null,
        video: type === "video" ? data.Location : null,
        status: true,
      });

      // Asigna el usuario al nuevo post
      newPost.UserId = user.id;

      // Guarda los cambios
      await newPost.save();

      return res
        .status(200)
        .json({ message: "Publicacion creada con exito", newPost });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postPost;
