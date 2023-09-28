const router = require("express").Router();
const putpost = require("../../Controllers/Post/putPost");

router.get("/post/:userId/:postId", putpost);

module.exports = router;
