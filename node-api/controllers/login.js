'use strict';
var UserModel = require('../models/users');
var um = new UserModel();

function LoginController() {

}

LoginController.prototype.login = function(req, res) {
  um.login(req.body, function(err, result) {
    err ? res.status(501).send(err) : res.send(result);
  });
};

module.exports = LoginController;
