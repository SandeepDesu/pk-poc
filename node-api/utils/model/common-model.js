'use strict';
var jwt = require('jsonwebtoken');
function CommonModel(schema) {
  this.DbSchema = schema;
}


CommonModel.prototype.get = function(c) {
  this.DbSchema.find({}, c);
};

CommonModel.prototype.getById = function(id, c) {
  this.DbSchema.findOne({ _id: id }, c);
};

CommonModel.prototype.create = function(data, c) {
  var user = new this.DbSchema(data);
  user.save(c);
};

CommonModel.prototype.update = function(id, data, c) {
  this.DbSchema.update({ _id: id }, data, { multi: true, upsert: true }, c);
};

CommonModel.prototype.login = function(data, c) {
  this.DbSchema.find({ username: data.username }, function(err, result) {
    if (err) {
      c(err, null);
    } else if (result.length && result.length === 1) {
      if (result[0].password === data.password) {
        var token = jwt.sign(JSON.stringify(result[0]), 'sample');
        c(null, { token: token, info: result[0] });
      } else {
        c(null, { message: 'Invalid Password' });
      }
    } else {
      c(null, { message: 'Not registered' });
    }
  });
};

module.exports = CommonModel;
