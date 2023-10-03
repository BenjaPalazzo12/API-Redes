const router = require("express").Router();
const PostLike = require("../../Controllers/PostLike/PostLike");

router.post("/like/:postId/:userId", PostLike);

module.exports = router;
