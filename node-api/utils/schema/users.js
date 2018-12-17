'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.userModel = mongoose.model('users', new Schema({
  username: { type: String },
  password: { type: String },
  profile: { type: Object },
  address: { type: Object },
}));
