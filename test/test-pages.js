const expect = require('chai').expect;
const request = require('request');

it('Index page content', (done)=>{
  request('http://localhost:3000', (err, response, body) => {
    expect(body).to.equal('Hello, Jenkins....');
    done();
  })
});