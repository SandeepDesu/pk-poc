'use strict';
var express = require('express');
var router = express.Router();
var UserController = require('../controllers/users');
var schema = require('../utils/schema/users');
var uc = new UserController(schema.userModel);
var middleware = require('../utils/middleware/check');

router.get('/', middleware.isValidUser, uc.get.bind(uc));
router.get('/:id', middleware.isValidUser, uc.getById.bind(uc));
router.post('/', uc.create.bind(uc));
router.put('/:id', middleware.isValidUser, uc.update.bind(uc));
module.exports = router;
