const router = require("express").Router();
const deleteMessage = require("../../Controllers/Message/deleteMessage");

router.delete("/message/:id", deleteMessage);

module.exports = router;
