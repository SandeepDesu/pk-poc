'use strict';
var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/login');
var lc = new LoginController();

router.post('/', lc.login.bind(lc));

module.exports = router;
