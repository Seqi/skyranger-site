// TODO: Write dynamic properties to the propety array before processing
// TODO: Populate properties with more values
// TODO: Differentiate properties between male and female
// TODO: Write a generated file and import into XCOM 2 to test
// TODO: Calculate struct length
// TODO: Convert custom people keys to match XCOM's to remove need for a map

var file = "./template/Demo.bin";

var soldierWriter = require('./utility/soldier-writer');
var testPerson = [
  {
    strFirstName: "Phil",
    strNickName: "'Halloptik'",
    strLastName: "Lip",
    BackgroundText: "No one knows anything about Phil because he tweets once a week. Spends most of his time ERPing on Final Fantasy XIV. Seen so much Miqo'te porn that he's slowly moving into furry territory."
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
