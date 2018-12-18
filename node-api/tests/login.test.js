'use strict';
/* global it, describe*/
var should = require('should');
var sinon = require('sinon');

describe('Checking login functionality', function() {
  it('Should login with invalid details', function() {
    var schema = {
      find: function(a, c) { c(null, [{ }]); },
    };
    var req = {
      body: {
        username: 'sandeep',
        password: 'Excellence@123',
      },
    };
    var res = {
      send: sinon.spy(),
      status: sinon.spy(),
    };
    var LoginController = require('../controllers/login');
    var lc = new LoginController(schema);
    lc.login(req, res);
    res.send.calledWith({ message: 'Invalid Password' }).should.equal(true);
  });
});
