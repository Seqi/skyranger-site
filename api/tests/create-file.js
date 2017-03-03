var testPerson = [
  {
    strFirstName: "Test",
    strNickName: "'Please'",
    strLastName: "Person",
    iGender: 1,
    BackgroundText: "Please for the love of god work"
  },
  {
    strFirstName: "Another",
    strNickName: "'Random'",
    strLastName: "Guy",
    iGender: 1,
    BackgroundText: "Two for two?"
  },
  {
  strFirstName: "aaaaaa",
  strNickName: "'bb'",
  strLastName: "cccc",
  iGender: 2,
  BackgroundText: "CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y "
  }
];

var soldierWriter = require('../src/soldier-writer');
var newSoldier = soldierWriter(testPerson);

var fs = require('fs');
fs.writeFile("../Custom.bin", newSoldier, function(err){
  if (err){
    console.log("Error " + err);
  }

  console.log("Saved!");
})
