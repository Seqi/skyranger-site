var mocha = require('mocha')
var expect = require('chai').expect
var testPerson = require('./testData').testPerson
var soldierKeys = require('./testData').soldierKeys
var reader = require('../src/soldier-reader');
var soldierWriter = require('../src/soldier-writer');

var newSoldier = soldierWriter(testPerson)
var result = reader(newSoldier).getSoldiers();

// It should really be testing the functions which write each {'name', 'type', 'weirdNum', 'val } entry
// since then you'd be sure they're always the correct types if the function itself is tested

describe('Generated object', function () {
  describe('Object', function() {
    it('should contain the expected keys', function() {
      expect(result).to.have.all.keys('soldiers', 'CharacterPool', 'PoolFileName')
    })
    
    it('should contain the expected types', function() {
      expect(result.soldiers).to.be.an('array')
      expect(result.CharacterPool).to.be.an('object')
      expect(result.PoolFileName).to.be.an('object')
    })
  })
  
  describe('Soldier Array', function() {
    it('should contain the expected keys', function() {
      expect(result.soldiers[0]).to.have.all.keys(soldierKeys)
    })
    
    it('each key should contain types of the expected value', function() {
      for (var i of soldierKeys) {
        expect(result.soldiers[0][i]).to.have.all.keys('name', 'type', 'weirdNum', 'val')
        expect(result.soldiers[0][i].name).to.be.a('string')
        expect(result.soldiers[0][i].type).to.be.a('string')
        expect(result.soldiers[0][i].weirdNum).to.be.a('number')
        expect(result.soldiers[0][i].val).to.exist
      }
    })
  })
  
  describe('CharacterPool', function() {
    it('should contain the expected keys', function() {
      expect(result.CharacterPool).to.have.all.keys('name', 'type', 'weirdNum', 'val')
    })
    
    it('each key should contain types of the expected value', function() {
        expect(result.CharacterPool).to.have.all.keys('name', 'type', 'weirdNum', 'val')
        expect(result.CharacterPool.name).to.be.a('string')
        expect(result.CharacterPool.type).to.be.a('string')
        expect(result.CharacterPool.weirdNum).to.be.a('number')
        expect(result.CharacterPool.val).to.exist
    })
  })
  
  describe('PoolFileName', function() {
    it('should contain the expected keys', function() {
      expect(result.CharacterPool).to.have.all.keys('name', 'type', 'weirdNum', 'val')
    })
    
    it('each key should contain types of the expected value', function() {
        expect(result.PoolFileName).to.have.all.keys('name', 'type', 'weirdNum', 'val')
        expect(result.PoolFileName.name).to.be.a('string')
        expect(result.PoolFileName.type).to.be.a('string')
        expect(result.PoolFileName.weirdNum).to.be.a('number')
        expect(result.PoolFileName.val).to.exist
    })
  })
})