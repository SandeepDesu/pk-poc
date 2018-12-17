var express = require('express'),
    router = express.Router(),
    loginController = require('../controllers/login'),
    lc = new loginController();

router.post('/', lc.login.bind(lc));

module.exports = router;