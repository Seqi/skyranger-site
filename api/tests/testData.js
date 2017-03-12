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

function generateSoldiers(num) {
  var testPerson = [];

  var firstNames = ["Oakley", "Charlie", "Casey", "Jessie", "Skyler"];
  var lastNames = ["Smith", "Adams", "Jackson", "Lowell", "Morgan"];

  var soldiersToCreate = num || 1;
  for(var i = 0; i < soldiersToCreate; i++){
    testPerson.push({
      strFirstName: firstNames[getRandomNumber(firstNames.length)],
      strNickName: "'" + i + "'",
      strLastName: lastNames[getRandomNumber(lastNames.length)],
      iGender: getRandomNumber(2) + 1,
      BackgroundText: "wew"
    });
  }
  
  return testPerson
}

function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

module.exports = {
  testPerson,
  generateSoldiers
}