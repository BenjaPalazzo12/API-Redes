const router = require("express").Router();
const deletePostLike = require("../../Controllers/PostLike/deletePostLike");

router.delete("/postLike/:id", deletePostLike);

module.exports = router;
