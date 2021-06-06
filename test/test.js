var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var practica1 = require('../index');

describe('Testing assert function: ', function() {
    describe('Check addTest Function', function(){
      it('Check the returned value using  : assert.equal(value, value): ', function() {
         result = practica1.validarnumeros(5,10)
         assert.equal(result, true);
      });
   });
});