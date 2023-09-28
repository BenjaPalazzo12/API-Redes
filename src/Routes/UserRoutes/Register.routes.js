const router = require("express").Router();
const registerUser = require("../../Controllers/Users/registerUser");

router.post("/register", registerUser);

module.exports = router;
