const router = require("express").Router();
const postpost = require("../../Controllers/Post/postPost");

router.post("/post/:userId", postpost);

module.exports = router;
