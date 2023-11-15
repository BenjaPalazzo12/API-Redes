const { Share } = require("../../DataBase");

const deleteShare = async (req, res) => {
  try {
    const { id } = req.params;
    const { active } = req.body;
    if (!id) {
      return res.status(404).json({ message: "No se proporciono ID!" });
    }

    const shareFound = await Share.findByPk(id);

    if (!shareFound) {
      return res
        .status(404)
        .json({ message: "No hay publicaciones compartidas!" });
    }

    await Share.update(
      { active }, // Columnas y valores a actualizar
      { where: { id } } // Cláusula where
    );

    return res
      .status(200)
      .json({ message: "Dejaste de compartir esta publicacion" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteShare;
