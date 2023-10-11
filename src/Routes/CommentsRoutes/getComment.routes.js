const router = require("express").Router();
const getComments = require("../../Controllers/Coments/getComments");

router.get("/comments", getComments);

module.exports = router;
