const router = require("express").Router();
const getFollow = require("../../Controllers/Follows/getFollow");

router.get("/follow", getFollow);

module.exports = router;
