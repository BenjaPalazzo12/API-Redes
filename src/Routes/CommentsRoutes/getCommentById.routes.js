const router = require('express').Router();
const getCommentsById = require('../../Controllers/Coments/getCommentsById');

router.get("/comment/:id", getCommentsById)

module.exports = router