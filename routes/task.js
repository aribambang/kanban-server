const express = require('express');
const router = express.Router();

const { create } = require('../controllers/task');

router.post('/', create);

module.exports = router;