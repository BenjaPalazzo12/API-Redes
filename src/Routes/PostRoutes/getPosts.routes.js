const router = require("express").Router();
const getposts = require("");

router.get("/posts", getposts);

module.exports = router;
