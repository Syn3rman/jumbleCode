const express = require('express');
const router = express.Router();

router.use('/checkAnswer', require('./loganswer'));
router.use('/users', require('./users'));

module.exports = router;
