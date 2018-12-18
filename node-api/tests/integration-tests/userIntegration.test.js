'use strict';
/* global describe, it*/
var should = require('should');
var request = require('supertest');
var app = require('../../app');
var agent = request.agent(app);

describe('Users collection cruid operations', function(){
  it('Should create new user', function(done){
    var obj = { 
      "username": 'test', 
      "password":'Excellence@123', 
      "profile": {
        "firstName": "test",
        "lastName": "test",
        "phone": 9492301208
    },};
    agent.post('/v1/users')
      .send(obj)
      .expect(200)
      .end(function(err,result){
        result.body.username.should.equals('test');
        done();
      })
  });
});
