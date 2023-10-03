const router = require("express").Router();
const postFollow = require("../../Controllers/Follows/postFollow");

router.post("/follows/:followerId/:followingId", postFollow);

module.exports = router;
