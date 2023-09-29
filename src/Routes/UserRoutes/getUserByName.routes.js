const router = require("express").Router();
const getUserByName = require("../../Controllers/Users/getUserByName");

router.get("/users/:userName", getUserByName);

module.exports = router;
