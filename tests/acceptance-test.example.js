const request = require('supertest');
const app = require('../app.js');
const chai = require('chai');
const assert = chai.assert;
const questions = require('../data/questions');

describe('Ensure the testing frameworks are properly wired-up', function() {
  it('returns the length of the questions array', function(done) {
    assert.equal((questions.length), 3)
    // request(app);
    //   .get('/api/v1/questions');
    //   .expect('Content-Type', 'application/json; charset=utf-8');
    //   .expect(200, done);
    done()
  });
});
