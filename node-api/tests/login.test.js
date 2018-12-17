'use strict';
/* global it, describe, before, after*/
var LoginController = require('../controllers/login');
var mongoose = require('mongoose');
var lc = new LoginController();
/**
 * by connecting to db like this way to test controllers
 */
describe('Testing Login Functionality', function() {
  before(function() {
    mongoose.connect('mongodb://localhost:27017/sample');
  });

  it('Should login with valid credentials', function(done) {
    var req = {
      body: {
        username: 'sandeep',
        password: 'Excellence@123',
      },
    };
    var res = {
      send: test,
    };
    function test(value) {
      done();
    }
    lc.login(req, res);
  });

  after(function() {
    mongoose.disconnect();
  });
});
