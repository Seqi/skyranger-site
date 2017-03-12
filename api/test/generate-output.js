var mocha = require('mocha')
var expect = require('chai').expect
var testPerson = require('./testData').testPerson
var reader = require('../src/soldier-reader');
var soldierWriter = require('../src/soldier-writer');

var newSoldier = soldierWriter(testPerson)
var result = reader(newSoldier).getSoldiers();

describe('Generated soldier object', function () {
  it('should contain the expected keys', function() {
    expect(result).to.have.all.keys('soldiers', 'CharacterPool', 'PoolFileName')
  })
})

console.log(JSON.stringify(result, null, 4));
