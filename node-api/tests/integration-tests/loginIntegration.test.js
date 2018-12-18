'use strict';
'use strict';
/**
 * at a time we can run Integrations tests or Unit testing !!!
 */
/* global describe, it*/
var should = require('should');
var request = require('supertest');
var app = require('../../app');
var agent = request.agent(app);

describe('Login Functionality checking in Integration', function() {
  it('Should check with valid credentials', function(done) {
    var obj = { username: 'sandeep', password: 'Excellence@123' };
    agent.post('/v1/login')
      .send(obj)
      .expect(200)
      .end(function(err, results){
        results.body.info.username.should.equal('sandeep');
        done();
      });
  });
});
