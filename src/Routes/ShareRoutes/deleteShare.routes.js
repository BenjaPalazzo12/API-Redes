const router = require('express').Router();
const deleteShare = require('../../Controllers/Share/deleteShare');

router.post("/share/:id", deleteShare)

module.exports = router;