const router = require("express").Router();
const getpost = require("");

router.get("/post/:userId", getpost);

module.exports = router;
