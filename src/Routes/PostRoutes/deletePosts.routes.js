const router = require("express").Router();
const deletePostsByUser = require("../../Controllers/Post/deletePosts");

router.delete("/post/:userId", deletePostsByUser);

module.exports = router;
