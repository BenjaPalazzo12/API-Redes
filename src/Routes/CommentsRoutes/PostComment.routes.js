const router = require("express").Router();
const postComment = require("../../Controllers/Coments/postComments");

router.post("/comment/:UserId/:PostId", postComment);

module.exports = router;
