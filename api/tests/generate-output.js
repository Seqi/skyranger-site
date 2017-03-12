var testPerson = require('./testData').testPerson

var soldierWriter = require('../src/soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Read the result back in
var reader = require('../src/soldier-reader');
var result = reader(newSoldier).getSoldiers();

console.log(JSON.stringify(result, null, 4));
