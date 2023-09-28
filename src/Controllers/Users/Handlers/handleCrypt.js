const bcrypt = require("bcryptjs");

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (passswordPlain, hashPassword) => {
  return await bcrypt.compare(passswordPlain, hashPassword);
};

module.exports = { encrypt, compare };