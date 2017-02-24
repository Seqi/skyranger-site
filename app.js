// TODO: Write dynamic properties to the propety array before processing
// TODO: Populate properties with more values
// TODO: Differentiate properties between male and female
// TODO: Write a generated file and import into XCOM 2 to test
// TODO: Calculate struct length
// TODO: Convert custom people keys to match XCOM's to remove need for a map

var file = "./template/Demo.bin";

<<<<<<< df164c590521e39b2cf7099646902921b1914e96
var soldierWriter = require('./utility/soldier-writer');
var testPerson = [
  {
    strFirstName: "Phil2",
    strNickName: "'Halloptik'",
    strLastName: "Lip",
    BackgroundText: "No one knows anything about Phil because he tweets once a week. Spends most of his time ERPing on Final Fantasy XIV. Seen so much Miqo'te porn that he's slowly moving into furry territory."
  }
];
=======
var singleSoldier = soldierReader(fileSingleSoldier).getSoldiers();
console.log("Retrieved " + singleSoldier.soldiers.length + " soldiers.");
console.log(JSON.stringify(singleSoldier, null, 4));
>>>>>>> Reader now returns object rather than output

<<<<<<< c5912b3f593fa36aa7a71c3163d0ef4b5337ad83
var newSoldier = soldierWriter(testPerson)
=======
console.log("----------------------------------");
>>>>>>> Soldiers property intiialised with header. Outputting both tests.

<<<<<<< df164c590521e39b2cf7099646902921b1914e96
// Read the new soldier back in to ensure it parses correctly
var reader = require('./utility/soldier-reader')(newSoldier);
var output = reader.getSoldiers();

console.log(JSON.stringify(output, null, 4));
=======
var twoSoldiers = soldierReader(fileTwoSoldiers).getSoldiers();
<<<<<<< c5912b3f593fa36aa7a71c3163d0ef4b5337ad83
//console.log("Retrieved " + twoSoldiers.soldiers.length + " soldiers.");
//console.log(JSON.stringify(twoSoldiers.soldiers, null, 4));
>>>>>>> Reader now returns object rather than output
=======
console.log("Retrieved " + twoSoldiers.soldiers.length + " soldiers.");
console.log(JSON.stringify(twoSoldiers.soldiers, null, 4));
>>>>>>> Soldiers property intiialised with header. Outputting both tests.
