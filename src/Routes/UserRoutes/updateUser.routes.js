const router = require("express").Router();
const updateUser = require("../../Controllers/Users/updateUser");

router.put("/user/:id", updateUser);

module.exports = router;
