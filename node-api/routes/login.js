'use strict';
var express = require('express');
var router = express.Router();
var LoginController = require('../controllers/login');
var schema = require('../utils/schema/users');
var lc = new LoginController(schema.userModel);

router.post('/', lc.login.bind(lc));

module.exports = router;
