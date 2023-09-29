const router = require("express").Router();
const deletepost = require("../../Controllers/Post/deletePost");

router.delete("/post/:userId/:postId", deletepost);

module.exports = router;
