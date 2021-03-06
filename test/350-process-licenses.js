var expect = require('chai').expect;
var process = require('../lib/process');
var expected_result = {};

describe('process.licenses(payload, callback)', function () {
  
  it('calls back with an empty object', function (done) {
      process.licenses({}, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal(expected_result);
      done();
    });
  });

});
