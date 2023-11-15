const { Comment } = require("../../DataBase");

const updateComment = async (req, res) => {
  try {
    const { body, like } = req.body;
    const { id } = req.params;

    const foundComment = await Comment.findByPk(id);

    if (!foundComment)
      return res.status(404).json({ message: "No existe ese comentario!" });

    if (body !== undefined) {
      foundComment.body = body;
    }

    if (like !== undefined) {
      foundComment.like = like;
    }
    
    if(foundComment.changed()){
      await foundComment.save();
      return res.status(200).json({message: "Comentario Actualizado!"})
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = updateComment;
