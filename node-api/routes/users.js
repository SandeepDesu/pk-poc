var express = require('express'),
    router = express.Router(),
    userController = require('../controllers/users'),
    uc = new userController(),
    middleware = require('../utils/middleware/check');

router.get('/', middleware.isValidUser, uc.get.bind(uc));
router.get('/:id', middleware.isValidUser, uc.getById.bind(uc));
router.post('/', uc.create.bind(uc));
router.put('/:id', middleware.isValidUser, uc.update.bind(uc));
module.exports = router;