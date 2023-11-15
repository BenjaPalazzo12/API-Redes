const router = require("express").Router();
const updateComment = require("../../Controllers/Coments/updateComments");

router.put("/comment/:id", updateComment);

module.exports = router;
