const expect = require('chai').expect;
const request = require('supertest');

describe('Loading Express app', function loadExpress() {
  let app;

  before('Load entrypoint', function() {
    app = require('../../index');
  });

  after('Unload entrypoint', function() {
    app.close();
  });

  it('Responds to / with proper Content-Type and status', function testIndex(done) {
    const expectedBody = {
      msg: "Hello, Jenkins...."
    };

    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(expectedBody, done)
  });

  it.skip('Cookie is NOT set before login', function testCookieAbsence(done) {
  });

  it.skip('Cookie is set after login', function testCookie(done) {
  });

  it ('Return 404 for invalid routes', function test404(done) {
    request(app)
      .get('/bad/path')
      .expect(404, done);
  });
});