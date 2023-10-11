const router = require("express").Router();
const getPostByUser = require("../../Controllers/Post/getPost");

router.get("/post/:userId/:postId", getPostByUser);

module.exports = router;
