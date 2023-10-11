const router = require("express").Router();
const postShare = require("../../Controllers/Share/postShare");

router.post("/share/:PostId/:UserId", postShare);

module.exports = router;
