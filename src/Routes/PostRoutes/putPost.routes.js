const router = require("express").Router();
const putPostByUser = require("../../Controllers/Post/putPost");

router.put("/post", putPostByUser);

module.exports = router;
