const router = require("express").Router();
const getPostsByUser = require("../../Controllers/Post/getPostsByUser");

router.get("/posts/:userId", getPostsByUser);

module.exports = router;
