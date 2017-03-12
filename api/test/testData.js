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

// All categories and the possible number of values (as an integer)
var possibleValues = {
  'm_SoldierClassTemplateName': 6,
  'CharacterTemplateName': 1,
  'kAppearance': 1,
  'nmHead': 43,
  'iGender': 2,
  'iRace': 4,
  'nmHaircut': 61,
  'iHairColor': 29,
  'iFacialHair': 17,
  'nmBeard': 26,
  'iSkinColor': 6,
  'iEyeColor': 19,
  'nmFlag': 35,
  'iVoice': 15,
  'iAttitude': 7,
  'iArmorDeco': 2,
  'iArmorTint': 65,
  'iArmorTintSecondary': 73,
  'iWeaponTint': 61,
  'iTattooTint': 80,
  'nmWeaponPattern': 18,
  'nmPawn': 2,
  'nmTorso': 13,
  'nmArms': 16,
  'nmLegs': 13,
  'nmHelmet': 23,
  'nmEye': 1,
  'nmTeeth': 1,
  'nmFacePropLower': 10,
  'nmFacePropUpper': 30,
  'nmPatterns': 18,
  'nmVoice': 45,
  'nmLanguage': 2,
  'nmTattoo_LeftArm': 11,
  'nmTattoo_RightArm': 11,
  'nmScars': 20,
  'nmTorso_Underlay': 2,
  'nmArms_Underlay': 2,
  'nmLegs_Underlay': 2,
  'nmFacePaint': 4,
  'nmLeftArm': 1,
  'nmRightArm': 1,
  'nmLeftArmDeco': 1,
  'nmRightArmDeco': 1,
  'Country': 35,
  'AllowedTypeSoldier': 1,
  'AllowedTypeVIP': 2,
  'AllowedTypeDarkVIP': 2
}

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
  possibleValues,
  generateSoldiers
}