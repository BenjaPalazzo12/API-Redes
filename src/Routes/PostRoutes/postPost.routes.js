const router = require("express").Router();
const postpost = require("../../Controllers/Post/postPost");

router.post("/post/:userId/:postId", postpost);

module.exports = router;
