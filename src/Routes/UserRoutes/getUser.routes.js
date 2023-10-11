const router = require("express").Router();
const getUser = require("../../Controllers/Users/getUsers");

router.get("/users", getUser);

module.exports = router;
