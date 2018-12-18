'use strict';
var CommonModel = require('../utils/model/common-model');
var um;

function LoginController(schema) {
  um = new CommonModel(schema);
}

LoginController.prototype.login = function(req, res) {
  um.login(req.body, function(err, result) {
    err ? res.status(501) && res.send(err) : res.send(result);
  });
};

module.exports = LoginController;
