var propertyBag = function(){

  this.properties = [
  {
    name: "kAppearance",
    type: "StructProperty",
    vals: [
      "TAppearance"
    ]
  },
  {
    name: "nmHead",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "CaucMale_A", "CaucMale_B", "CaucMale_C", "CaucMale_D", "CaucMale_E", "CaucMale_F",
      "AfrMale_A", "AfrMale_B", "AfrMale_C", "AfrMale_D", "AfrMale_E", "AfrMale_F",
      "AsnMale_A", "AsnMale_B", "AsnMale_C", "AsnMale_D", "AsnMale_E", "AsnMale_F",
      "LatMale_A", "LatMale_B", "LatMale_C", "LatMale_D", "LatMale_E", "LatMale_F"
    ],
    femaleVals: [
      "CaucFem_A", "CaucFem_B", "CaucFem_C", "CaucFem_D", "CaucFem_E", "CaucFem_F",
      "AfrFem_A", "AfrFem_B", "AfrFem_C", "AfrFem_D", "AfrFem_E", "AfrFem_F",
      "AsnFem_A", "AsnFem_B", "AsnFem_C", "AsnFem_D", "AsnFem_E", "AsnFem_F",
      "LatFem_A", "LatFem_B", "LatFem_C", "LatFem_D", "LatFem_E", "LatFem_F"
    ]
  },
  {
    name: "iGender",
    type: "IntProperty",
    vals: []
  },
  {
    name: "iRace",
    type: "IntProperty",
    vals: [
      0, // Caucasian
      1, // African
      2, // Asian
      3 // Latino
    ]
  },
  {
    name: "nmHaircut",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "MaleHair_Blank",
      "MaleHairShort_A",
      "MaleHairShort_B",

    ],
    femaleVals: [
      "Female_LongWavy",
      "FemHair_D"
    ]
  },
  {
    name: "iHairColor",
    type: "IntProperty",
    vals: [
      12
    ]
  },
  {
    name: "iFacialHair",
    type: "IntProperty",
    vals: [
      0
    ]
  },
  {
    name: "nmBeard",
    type: "NameProperty",
    vals: [
      "SM_Beard_MuttonChop"
    ]
  },
  {
    name: "iSkinColor",
    type: "IntProperty",
    vals: [
      1
    ]
  },
  {
    name: "iEyeColor",
    type: "IntProperty",
    vals: [
      0
    ]
  },
  {
    name: "nmFlag",
    type: "NameProperty",
    vals: [
      "Country_France",
      "Country_Germany",
      "Country_Poland",
    ]
  },
  {
    name: "iVoice",
    type: "IntProperty",
    vals: [
      0
    ]
  },
  {
    name: "iAttitude",
    type: "IntProperty",
    vals: [
      6
    ]
  },
  {
    name: "iArmorDeco",
    type: "IntProperty",
    vals: [
      0
    ]
  },
  {
    name: "iArmorTint",
    type: "IntProperty",
    vals: [
      8
    ]
  },
  {
    name: "iArmorTintSecondary",
    type: "IntProperty",
    vals: [
      11
    ]
  },
  {
    name: "iWeaponTint",
    type: "IntProperty",
    vals: [
      72
    ]
  },
  {
    name: "iTattooTint",
    type: "IntProperty",
    vals: [
      36
    ]
  },
  {
    name: "nmWeaponPattern",
    type: "NameProperty",
    vals: [
      "Stripes"
    ]
  },
  {
    name: "nmPawn",
    type: "NameProperty",
    vals: [
      "None"
    ]
  },
  {
    name: "nmTorso",
    type: "NameProperty",
    vals: [
      "CnvMed_Std_C_M"
    ]
  },
  {
    name: "nmArms",
    type: "NameProperty",
    vals: [
      "CnvMed_Std_C_M"
    ]
  },
  {
    name: "nmLegs",
    type: "NameProperty",
    vals: [
      "CnvMed_Std_C_M"
    ]
  },
  {
    name: "nmHelmet",
    type: "NameProperty",
    vals: [
      "DLC_0_Hood_A_Simple_M"
    ]
  },
  {
    name: "nmEye",
    type: "NameProperty",
    vals: [
      "DefaultEyes"
    ],
    // This is the only name property with a nagic number. Weird..
    magic: 2
  },
  {
    name: "nmTeeth",
    type: "NameProperty",
    vals: [
      "DefaultTeeth"
    ]
  },
  {
    name: "nmFacePropLower",
    type: "NameProperty",
    vals: [
      "Prop_FaceLower_Blank"
    ]
  },
  {
    name: "nmFacePropUpper",
    type: "NameProperty",
    vals: [
      "PlainGlasses_M"
    ]
  },
  {
    name: "nmPatterns",
    type: "NameProperty",
    vals: [
      "Camo_Tundra"
    ]
  },
  {
    name: "nmVoice",
    type: "NameProperty",
    vals: [
      "MaleVoice2_English_US"
    ]
  },
  {
    name: "nmLanguage",
    type: "NameProperty",
    vals: [
      "None"
    ]
  },
  {
    name: "nmTattoo_LeftArm",
    type: "NameProperty",
    vals: [
      "Tattoo_Arms_03"
    ]
  },
  {
    name: "nmTattoo_RightArm",
    type: "NameProperty",
    vals: [
     "Tattoo_Arms_BLANK"
    ]
  },
  {
    name: "nmScars",
    type: "NameProperty",
    vals: [
     "Scars_BLANK"
    ]
  },
  {
    name: "nmTorso_Underlay",
    type: "NameProperty",
    vals: [
     "CnvUnderlay_Std_Torsos_A_M"
    ]
  },
  {
    name: "nmArms_Underlay",
    type: "NameProperty",
    vals: [
     "CnvUnderlay_Std_Arms_A_M"
    ]
  },
  {
    name: "nmLegs_Underlay",
    type: "NameProperty",
    vals: [
     "CnvUnderlay_Std_Legs_A_M"
    ]
  },
  {
    name: "nmFacePaint",
    type: "NameProperty",
    vals: [
     "None"
    ]
  },
  {
    name: "nmLeftArm",
    type: "NameProperty",
    vals: [
     "None"
    ]
  },
  {
    name: "nmRightArm",
    type: "NameProperty",
    vals: [
     "None"
    ]
  },
  {
    name: "nmLeftArmDeco",
    type: "NameProperty",
    vals: [
     "None"
    ]
  },
  {
    name: "nmRightArmDeco",
    type: "NameProperty",
    vals: [
     "None"
    ]
  },
  {
    // End of struct
    name: "None",
  },
  {
    name: "Country",
    type: "NameProperty",
    vals: [
     "Country_Germany"
    ]
  },
  {
    name: "AllowedTypeSoldier",
    type: "BoolProperty",
    vals: [
     true
    ]
  },
  {
    name: "AllowedTypeVIP",
    type: "BoolProperty",
    vals: [
     false
    ]
  },
  {
    name: "AllowedTypeDarkVIP",
    type: "BoolProperty",
    vals: [
     false
    ]
  },
  {
    name: "PoolTimestamp",
    type: "StrProperty",
    vals: [
    ]
  },
  {
    name: "BackgroundText",
    type: "StrProperty",
    vals: [
    ]
  },
  {
    // End of character separator
    name: "None"
  }
];
}

module.exports = function() {
  return new propertyBag().properties;
};
