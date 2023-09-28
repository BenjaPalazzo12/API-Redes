const router = require("express").Router();
const deleteposts = require("");

router.get("/post/:userId", deleteposts);

module.exports = router;
