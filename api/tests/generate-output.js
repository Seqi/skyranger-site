var mocha = require('mocha')
var testPerson = require('./testData').testPerson
var reader = require('../src/soldier-reader');
var soldierWriter = require('../src/soldier-writer');

var newSoldier = soldierWriter(testPerson)
var result = reader(newSoldier).getSoldiers();

console.log(JSON.stringify(result, null, 4));
