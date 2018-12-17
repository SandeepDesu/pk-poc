'use strict';
/* global it, describe, before, after*/
var UserController = require('../controllers/users');
var uc = new UserController();
var mongoose = require('mongoose');
var expect = require('chai').expect;
/**
 * by connecting to db like this way to test controllers
 */
describe('Checking user information', function() {
  before(function(){
    mongoose.connect('mongodb://localhost:27017/sample');
  });
  it('Should get all user details', function(done) {
    function test(value){
      expect(value.length).equal(1);
      done();
    }
    uc.get({}, {send: test});
  });
  after(function(){
    mongoose.disconnect();
  });
});
