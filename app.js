var file = "./template/Demo.bin";

var soldierWriter = require('./utility/soldier-writer');
var testPerson = [
  {
    firstName: "Phil",
    nickName: "'Halloptik'",
    lastName: ""
  }
];

var newSoldier = soldierWriter(testPerson)

// Get official buffer from game and compare the bytes retrieved so far
var gameBuffer = require('fs').readFileSync(file);
var expectedBuffer = gameBuffer.slice(0, newSoldier.length);

// Log results
console.log();
console.log("---------------Generated---------------")
console.log(newSoldier.toString('hex'));
console.log();

console.log('---------------Expecting---------------');
console.log(expectedBuffer.toString('hex'));
console.log();

console.log("Is Matching: " + newSoldier.equals(expectedBuffer));
