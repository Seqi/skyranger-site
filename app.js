// TODO: Write dynamic properties to the propety array before processing
// TODO: Populate properties with more values
// TODO: Differentiate properties between male and female
// TODO: Write a generated file and import into XCOM 2 to test
// TODO: Calculate struct length

var file = "./template/Demo.bin";

var testPerson = [
  {
    strFirstName: "Test",
    strNickName: "'Please'",
    strLastName: "Person",
    BackgroundText: "Please for the love of god work"
  }
];

var soldierWriter = require('./utility/soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Log results
console.log();
console.log("---------------Generated---------------")
console.log(newSoldier.toString('hex'));

var fs = require('fs');

fs.writeFile("./template/Custom.bin", newSoldier, function(err){
  if (err){
    console.log("Error " + err);
  }

  console.log("Saved!");
})
