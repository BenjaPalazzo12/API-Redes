const router = require("express").Router();
const updatePassword = require("../../Controllers/Users/updatePassword");

router.put("/password/:id", updatePassword);

module.exports = router;
