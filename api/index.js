const express = require('express');
const router = express.Router();

router.use('/furniture', require('./furniture'));

module.exports = router;
