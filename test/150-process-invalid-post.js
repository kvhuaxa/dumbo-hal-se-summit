var expect = require('chai').expect;
var process = require('../lib/process');

describe('process.order() sanity check', function () {

 it('must not process unknown discount model', function (done) {
      var body = { prices: [ 91.73 ],
                   quantities: [ 2 ],
                   names:
                    [ 'Tea',
                      'Glove',
                      'Worms',
                      'Water',
                      'Carrot',
                      'Jacket',
                      'Stinking cheese',
                      'Net' ],
                   country: 'HU',
                   reduction: 'STRANGE' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      });
  });

 it('must check if prices are defined', function (done) {
      var body = { quantities: [ 2, 3 ],
                   country: 'HU',
                   reduction: 'STANDARD' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      });
  });

  it('must check if quantities are defined', function (done) {
       var body = { prices: [ 91.73 ],
                    country: 'HU',
                    reduction: 'STANDARD' };

       process.order(body, function (err, result) {
         if (err) return done(err);
         expect(result).to.deep.equal({  });
         done();
       });
   });

   it('must check if country is defined', function (done) {
        var body = { prices: [ 91.73 ],
                     quantities: [ 2, 3 ],
                     reduction: 'STANDARD' };

        process.order(body, function (err, result) {
          if (err) return done(err);
          expect(result).to.deep.equal({  });
          done();
        });
    });

    it('must not calculate any total if country is invalid', function (done) {
         var body = { prices: [ 91.73 ],
                      quantities: [ 2 ],
                      country: 'ZZ',
                      reduction: 'STANDARD' };

         process.order(body, function (err, result) {
           if (err) return done(err);
           expect(result).to.deep.equal({  });
           done();
         });
     });

 it('must check if prices & quantities have the same length', function (done) {
      var body = { prices: [ 91.73 ],
                   quantities: [ 1, 2 ],
                   names:
                    [ 'Tea',
                      'Net' ],
                   country: 'HU',
                   reduction: 'STANDARD' };

      process.order(body, function (err, result) {
        if (err) return done(err);
        expect(result).to.deep.equal({  });
        done();
      });
  });

 it('check if prices are negative', function (done) {
     var body = { prices: [ 91.73, -10.0 ],
                  quantities: [ 2, 3 ],
                  names:
                   [ 'Tea',
                     'Glove'],
                  country: 'HU',
                  reduction: 'STANDARD' };

   process.order(body, function (err, result) {
     if (err) return done(err);
     expect(result).to.deep.equal({  });
     done();
   });
 });

 it('check if quantities are negative', function (done) {
    var body = { prices: [ 91.73, 10.0, 2.38 ],
                 quantities: [ 2, 3, -1 ],
                 names:
                  [ 'Tea',
                    'Glove',
                    'Worms'],
                 country: 'HU',
                 reduction: 'STANDARD' };

    process.order(body, function (err, result) {
      if (err) return done(err);
      expect(result).to.deep.equal({  });
      done();
   });
 });
});
