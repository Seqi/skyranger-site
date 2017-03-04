var testPerson = [];

var firstNames = ["Oakley", "Charlie", "Casey", "Jessie", "Skyler"];
var lastNames = ["Smith", "Adams", "Jackson", "Lowell", "Morgan"];

var soldiersToCreate = process.argv[2] || 1;
for(var i = 0; i < soldiersToCreate; i++){
  testPerson.push({
    strFirstName: firstNames[getRandomNumber(firstNames.length)],
    strNickName: "'" + i + "'",
    strLastName: lastNames[getRandomNumber(lastNames.length)],
    iGender: getRandomNumber(2) + 1,
    BackgroundText: "wew"
  });
}

var soldierWriter = require('../src/soldier-writer');
var newSoldier = soldierWriter(testPerson);

var fs = require('fs');
fs.writeFile("../Custom.bin", newSoldier, function(err){
  if (err){
    console.log("Error " + err);
  }

  console.log("Saved!");
})

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}
