'use strict';
var jwt = require('jsonwebtoken');
exports.isValidUser = function(req, res, next) {
  if (req.headers['x-access-token']) {
    jwt.verify(req.headers['x-access-token'], 'sample', function(err, decode){
      if (err) {
        res.send({message: 'Invalid token'});
      } else {
        req._id = decode._id;
        next();
      }
    });
  } else {
    res.send({message: 'No token provided'});
  }
};
