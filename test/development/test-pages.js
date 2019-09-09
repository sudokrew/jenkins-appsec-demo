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

  it('Cannot access /admin without session cookie', function testAuthorization(done) {
    request(app)
      .get('/admin')
      .expect(401, done);
  });

  it('Cookie is NOT set before login', function testCookieAbsence(done) {
    request(app)
      .get('/')
      .expect((res) => {
        if (res.headers["set-cookie"]) {
          throw new Error("Session cookie set w/o login");
        }
      })
      .end(done);
  });

  it.skip('Cookie is set after login', function testCookie(done) {
  });

  it.skip('Cookie is not persisted after close of session', function testCookiePersistence(done) {
  });

  it ('Return 404 for invalid routes', function test404(done) {
    request(app)
      .get('/bad/path')
      .expect(404, done);
  });
});