'use strict';
var schema = require('../utils/schema/users');
var jwt = require('jsonwebtoken');
function UserModel() {
  this.UserModel = schema.userModel;
}


UserModel.prototype.get = function(c) {
  this.UserModel.find({}, c);
};

UserModel.prototype.getById = function(id, c) {
  this.UserModel.findOne({ _id: id }, c);
};

UserModel.prototype.create = function(data, c) {
  var user = new this.UserModel(data);
  user.save(c);
};

UserModel.prototype.update = function(id, data, c) {
  this.UserModel.update({ _id: id }, data, { multi: true, upsert: true }, c);
};

UserModel.prototype.login = function(data, c) {
  this.UserModel.find({ username: data.username }, function(err, result) {
    if (err) {
      c(err, null);
    } else if (result.length && result.length === 1) {
      if (result[0].password === data.password) {
        var token = jwt.sign(JSON.stringify(result[0]), 'sample');
        c(null, token);
      } else {
        c(null, { message: 'Invalid Password' });
      }
    } else {
      c(null, { message: 'Not registered' });
    }
  });
};

module.exports = UserModel;
