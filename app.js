// TODO: Write dynamic properties to the propety array before processing
// TODO: Populate properties with more values
// TODO: Differentiate properties between male and female
// TODO: Write a generated file and import into XCOM 2 to test
// TODO: Calculate struct length
// TODO: Convert custom people keys to match XCOM's to remove need for a map

var file = "./template/Demo.bin";

var testPerson = [
  {
    strFirstName: "Phil2",
    strNickName: "'Halloptik'",
    strLastName: "Lip",
    BackgroundText: "No one knows anything about Phil because he tweets once a week. Spends most of his time ERPing on Final Fantasy XIV. Seen so much Miqo'te porn that he's slowly moving into furry territory."
  }
];

var soldierWriter = require('./utility/soldier-writer');
var newSoldier = soldierWriter(testPerson);

// Read the new soldier back in to ensure it parses correctly
var reader = require('./utility/soldier-reader')(newSoldier);
var output = reader.getSoldiers();

console.log(JSON.stringify(output, null, 4));
