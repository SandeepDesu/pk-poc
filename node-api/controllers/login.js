var UserModel = require('../models/users'),
    um = new UserModel();

function LoginController() {

}

LoginController.prototype.login = function (req, res) {
    um.login(req.body, function (err, result) {
        res.send(result);
    });
};

module.exports = LoginController;