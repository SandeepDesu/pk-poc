'use strict';
var UserModel = require('../models/users');
var um = new UserModel();

function UserController() {

}

UserController.prototype.get = function(req, res) {
  um.get(function(err, result) {
    err ? res.status(501).send(err) : res.send(result);
  });
};

UserController.prototype.getById = function(req, res) {
  um.getById(req.params.id, function(err, result) {
    err ? res.status(501).send(err) : res.send(result);
  });
};


UserController.prototype.create = function(req, res) {
  um.create(req.body, function(err, result) {
    err ? res.status(501).send(err) : res.send(result);
  });
};

UserController.prototype.update = function(req, res) {
  um.update(req.params.id, req.body, function(err, result) {
    err ? res.status(501).send(err) : res.send(result);
  });
};

module.exports = UserController;
