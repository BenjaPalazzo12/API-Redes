const router = require("express").Router();
const deleteUser = require("../../Controllers/Users/deleteUser");

router.delete("/user/:id", deleteUser);

module.exports = router;
