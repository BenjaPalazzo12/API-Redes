const axios = require("axios");

const postMessage = async (req, res) => {
  try {
    const { userId1, userId2 } = req.params;
    const { body } = req.body;

    const response = await axios.post(
      `http://localhost:3002/createMessage/${userId1}/${userId2}`,
      {
        userId1,
        userId2,
        body,
      }
    );

    console.log(response.data);

    res.status(200).json({ message: "Mensaje enviado con éxito." });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postMessage;
