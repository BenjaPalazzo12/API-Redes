const router = require("express").Router();
const getShare = require("../../Controllers/Share/getShare");

router.get("/share", getShare);

module.exports = router;
