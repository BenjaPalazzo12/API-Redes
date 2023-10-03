const router = require("express").Router();
const getPostLikes = require("../../Controllers/PostLike/getPostLike");

router.get("/postLikes", getPostLikes);

module.exports = router;
