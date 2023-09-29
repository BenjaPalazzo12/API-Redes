const router = require("express").Router();
const getAllPost = require("../../Controllers/Post/getAllPosts");

router.get("/post", getAllPost);

module.exports = router;