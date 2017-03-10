var testPerson = [
  {
    strFirstName: "Test",
    strNickName: "'Please'",
    strLastName: "Man",
    iGender: 1,
    spooky: "wew",
    BackgroundText: "Please for the love of god work"
  },
  {
    strFirstName: "Another",
    strNickName: "'Random'",
    strLastName: "Lady",
    iGender: 2,
    BackgroundText: "Two for two?"
  }
];

<<<<<<< Updated upstream:api/tests/generate-output.js
var soldierWriter = require('../src/soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Read the result back in
var reader = require('../src/soldier-reader');
=======
var soldierWriter = require('../soldier-writer');
var newSoldier = soldierWriter(testPerson)

// Read the result back in
var reader = require('../soldier-reader');
>>>>>>> Stashed changes:tests/generate-output.js
var result = reader(newSoldier).getSoldiers();

console.log(JSON.stringify(result, null, 4));
