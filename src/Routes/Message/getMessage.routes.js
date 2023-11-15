const router = require("express").Router();
const getMessage = require("../../Controllers/Message/getMessage");

router.get("/message/:id", getMessage);

module.exports = router;
