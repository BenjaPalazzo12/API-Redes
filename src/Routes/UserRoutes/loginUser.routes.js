const router = require("express").Router();
const loginUser = require("../../Controllers/Users/loginUser");

router.post("/login", loginUser);

module.exports = router;
