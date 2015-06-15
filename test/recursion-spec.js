var chai = require('chai');
var should = chai.should();

var recursion = require('../recursion.js');


describe('Recursive Factoring', function () {

  describe('Recusion function', function () {

      it('recursion be a function', function () {
        recursion.should.be.a.function;
      });

      it('Should return a number', function () {
        recursion(4).should.be.a('number');
      });

      it('should return a factorial of that number', function () {
        recursion(4).should.equal(24);
        recursion(5).should.equal(120);
        recursion(6).should.equal(720);
      });

      it('should return false if 0 is the input', function () {
        recursion(0).should.equal(false);
      });
      it('should return false if the input is a negative function', function () {
        recursion(-1).should.equal(false);
      });

  });

});


