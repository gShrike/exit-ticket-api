const request = require('supertest');
const app = require('../app.js');

describe('GET /questions', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/api/v1/questions')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});
