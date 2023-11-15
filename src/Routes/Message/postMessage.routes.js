const router = require("express").Router();
const postMessage = require("../../Controllers/Message/postMessage");

router.post("/message/:userId1/:userId2", postMessage);

module.exports = router;
