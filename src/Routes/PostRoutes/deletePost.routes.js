const router = require("express").Router();
const deletepost = require("");

router.get("/post/:postId", deletepost);

module.exports = router;
