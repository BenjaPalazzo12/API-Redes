const axios = require("axios");

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.delete(
      `http://localhost:3002/deleteMessage/${id}`
    );

    console.log(response.data);

    res.status(200).json({ message: "Mensaje eliminado con éxito." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteMessage;
