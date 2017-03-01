var testPerson = [
  {
    strFirstName: "Test",
    strNickName: "'Please'",
    strLastName: "Person",
    iGender: 1,
    spooky: "wew",
    BackgroundText: "Please for the love of god work"
  },
  {
    strFirstName: "Another",
    strNickName: "'Random'",
    strLastName: "Guy",
    iGender: 0,
    BackgroundText: "Two for two?"
  }
];

var soldierWriter = require('../src/soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Read the result back in
var reader = require('../src/soldier-reader');
var result = reader(newSoldier).getSoldiers();

console.log(JSON.stringify(result, null, 4));
