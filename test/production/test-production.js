const expect = require('chai').expect;
const request = require('request');

describe('Testing deployed app', function loadExpress() {
  //TODO: For production-like test use deployed app URL w/ request over supertest

  it.skip('Issues a secure cookie', function testSecureCookies(done) {
    //TODO: Ensure that secure flag is set on cookies in production-like environment(HTTPS)
  });
});