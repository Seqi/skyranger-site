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

var soldierKeys = [
  'strFirstName',
  'strLastName',
  'strNickName',
  'm_SoldierClassTemplateName',
  'CharacterTemplateName',
  'kAppearance',
  'nmHead',
  'iGender',
  'iRace',
  'nmHaircut',
  'iHairColor',
  'iFacialHair',
  'nmBeard',
  'iSkinColor',
  'iEyeColor',
  'nmFlag',
  'iVoice',
  'iAttitude',
  'iArmorDeco',
  'iArmorTint',
  'iArmorTintSecondary',
  'iWeaponTint',
  'iTattooTint',
  'nmWeaponPattern',
  'nmPawn',
  'nmTorso',
  'nmArms',
  'nmLegs',
  'nmHelmet',
  'nmEye',
  'nmTeeth',
  'nmFacePropLower',
  'nmFacePropUpper',
  'nmPatterns',
  'nmVoice',
  'nmLanguage',
  'nmTattoo_LeftArm',
  'nmTattoo_RightArm',
  'nmScars',
  'nmTorso_Underlay',
  'nmArms_Underlay',
  'nmLegs_Underlay',
  'nmFacePaint',
  'nmLeftArm',
  'nmRightArm',
  'nmLeftArmDeco',
  'nmRightArmDeco',
  'Country',
  'AllowedTypeSoldier',
  'AllowedTypeVIP',
  'AllowedTypeDarkVIP',
  'PoolTimestamp',
  'BackgroundText'
]

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
  soldierKeys,
  generateSoldiers
}