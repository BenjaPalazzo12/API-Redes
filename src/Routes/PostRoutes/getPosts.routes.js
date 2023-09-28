const router = require("express").Router();
const getPostsByUser = require("../../Controllers/Post/getPosts");

router.get("/posts/:userId", getPostsByUser);

module.exports = router;
