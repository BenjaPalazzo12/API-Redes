const router = require("express").Router();
const getUserById = require("../../Controllers/Users/getUserById");

router.get("/user/:id", getUserById);

module.exports = router;
