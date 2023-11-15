const axios = require("axios");

const getMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const { data } = await axios(`http://localhost:3002/message/${id}`);
    console.log(data);
    return res.status(200).json(data)

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getMessage;
