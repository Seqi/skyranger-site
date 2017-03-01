var testPerson = [
  {
    strFirstName: "Test",
    strNickName: "'Please'",
    strLastName: "Person",
    BackgroundText: "Please for the love of god work"
  },
  {
    strFirstName: "Another",
    strNickName: "'Random'",
    strLastName: "Guy",
    BackgroundText: "Two for two?"
  },
  {
  strFirstName: "aaaaaa",
  strNickName: "'bb'",
  strLastName: "cccc",
  BackgroundText: "CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y CoolCat M a n g o  B a y "
  }
];

var soldierWriter = require('../utility/soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Log results
console.log();
console.log("---------------Generated---------------")
console.log(newSoldier.toString('hex'));
