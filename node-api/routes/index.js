'use strict';
var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));
router.use('/login', require('./login'));
module.exports = router;
