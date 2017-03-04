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
      "MaleHair_A",
      "MaleHair_B",
      "MaleHair_C",
      "MaleHair_D",
      "MaleHair_E",
      "MaleHair_F",
      "MaleHairShort_A",
      "MaleHairShort_B",
      "MaleHairShort_C",
      "MaleHair_Buzzcut",
      "Male_LongCurls",
      "Male_LongLayers",
      "AfroShort_M",
      "Classic_M",
      "Flattop_M",
      "Vet_Afro_M",
      "Vet_DirtyDreadDown_M",
      "Vet_SpikeMohawk_M",
      "Vet_DirtyDreadPony_M",
      "Vet_ThickMohawk_M",
      "Vet_Viking_M",
      "Vet_Cornrows_M",
      "Beaglerush_Hair",
      "SidMeier_Hair",
      "VanDoorn_Hair"
    ],
    femaleVals: [
      "FemHair_Blank",
      "FemHair_A",
      "FemHair_B",
      "FemHair_C",
      "FemHair_D",
      "FemHair_E",
      "FemHair_F",
      "FemHair_G",
      "FemHair_H",
      "FemHair_I",
      "FemHair_J",
      "FemHair_K",
      "FemHair_L",
      "FemHair_M",
      "FemHair_N",
      "FemHair_O",
      "FemHair_P",
      "FemHairShort",
      "FemHair_Buzzcut",
      "Female_LongStraightBangs",
      "Female_LongStraight",
      "Female_LongWavy",
      "AfroShort_F",
      "Classic_F",
      "Flattop_F",
      "Vet_Afro_F",
      "Vet_CleanDreadDown_F",
      "Vet_CleanDreadPony_F",
      "Vet_Cornrows_F",
      "Vet_DirtyDreadDown_F",
      "Vet_DirtyDreadPony_F",
      "Vet_SpikeMohawk_F",
      "Vet_ThickMohawk_F",
      "Vet_Viking_F",
    ]
  },
  {
    name: "iHairColor",
    type: "IntProperty",
    vals: [
      // I really should implement min/max values and handle later but for now..
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97
    ]
  },
  {
    // This seems to be deprecataed?
    name: "iFacialHair",
    type: "IntProperty",
    vals: [
      0
    ]
  },
  {
    name: "nmBeard",
    type: "NameProperty",
    isGenderSpecific:  true,
    maleVals: [
      "None",
      "MaleBeard_Blank",
      "MaleBeard_G",
      "MaleBeard_A",
      "MaleBeard_B",
      "MaleBeard_C",
      "Central_Beard",
      "ShortGoatee",
      "ShortSideburns",
      "ShortFullBeard",
      "ShortMoustache",
      "ShortMuttonChops",
      "ShortHandlebar",
      "SM_Beard_Goatee",
      "SM_Beard_Scruffy",
      "SM_Beard_MuttonChop",
      "SM_Beard_Full",
      "SM_Beard_FriendlyChops",
      "SM_Beard_Sideburns",
      "SM_Beard_HalfBurns",
      "SM_Beard_Chin",
      "SM_Beard_Sulz",
      "SM_Beard_Handlebar",
      "SM_Beard_Lincoln",
      "SM_Beard_Moustache",
      "Central_StratBeard",
      "Beard_Beaglerush"
    ],
    // For some reason, the default (and only) value for women"s facial hair
    // is MaleBeard_Blank, rather than None.
    femaleVals: [
      "MaleBeard_Blank"
    ]
  },
  {
    name: "iSkinColor",
    type: "IntProperty",
    vals: [
      0, 1, 2, 3, 4, 5, 6
    ]
  },
  {
    name: "iEyeColor",
    type: "IntProperty",
    vals: [
      // TODO: Populate with all values. This is just a selection..
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11 ,12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    ]
  },
  {
    // This seems to be deprecated. Leaving values in just in case.
    name: "nmFlag",
    type: "NameProperty",
    vals: [
      "Country_USA",
      "Country_UK",
      "Country_Ireland",
      "Country_Greece",
      "Country_Scotland",
      "Country_Sweden",
      "Country_Ukraine",
      "Country_Italy",
      "Country_Spain",
      "Country_Australia",
      "Country_Poland",
      "Country_Israel",
      "Country_Portugal",
      "Country_Germany",
      "Country_Mexico",
      "Country_Norway",
      "Country_Netherlands",
      "Country_Canada",
      "Country_Japan",
      "Country_SouthKorea",
      "Country_SouthAfrica",
      "Country_China",
      "Country_Russia",
      "Country_Argentina",
      "Country_Belgium",
      "Country_France",
      "Country_Egypt",
      "Country_Nigeria",
      "Country_Brazil",
      "Country_Turkey",
      "Country_Columbia",
      "Country_India",
      "Country_Iran",
      "Country_Pakistan",
      "Country_Venezuela"
    ]
  },
  {
    // Deprecated
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
      0, 1, 2, 3, 4, 5, 6
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
      // Sorry
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97
    ]
  },
  {
    name: "iArmorTintSecondary",
    type: "IntProperty",
    vals: [
      // Very sorry
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97
    ]
  },
  {
    name: "iWeaponTint",
    type: "IntProperty",
    vals: [
      // Still sorry
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97
    ]
  },
  {
    name: "iTattooTint",
    type: "IntProperty",
    vals: [
      // Super sorry
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
      81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97
    ]
  },
  {
    name: "nmWeaponPattern",
    type: "NameProperty",
    vals: [
      "Camo_Tundra",
      "Pat_Nothing",
      "PC_A",
      "Stripes",
      "Shemag",
      "Hearts",
      "Hex",
      "Plaid_A",
      "Zebra",
      "Diagonals",
      "Camo_B",
      "Camo_A",
      "Tigerstripe",
      "Camo_Arid",
      "Camo_Digital",
      "Camo_AlienFacility",
      "Camo_Wilderness",
      "PolkaDots"
    ]
  },
  {
    name: "nmPawn",
    type: "NameProperty",
    vals: [
      "None"
      // Sometimes (rarely) ths value is the following.. not sure why
      //"XCom_Soldier_F"
    ]
  },
  {
    name: "nmTorso",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "CnvMed_Std_A_M",
      "CnvMed_Std_B_M",
      "CnvMed_Std_C_M",
      "CnvMed_Std_D_M",
    ],
    femaleVals: [
      "CnvMed_Std_A_F",
      "CnvMed_Std_B_F",
      "CnvMed_Std_C_F",
      "CnvMed_Std_D_F",
    ]
  },
  {
    name: "nmArms",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "CnvMed_Std_A_M",
      "CnvMed_Std_B_M",
      "CnvMed_Std_C_M",
      "CnvMed_Std_D_M",
      "CnvMed_Std_E_M",
      "CnvMed_Std_F_M",
    ],
    femaleVals: [
      "CnvMed_Std_A_F",
      "CnvMed_Std_B_F",
      "CnvMed_Std_C_F",
      "CnvMed_Std_D_F",
      "CnvMed_Std_E_F",
      "CnvMed_Std_F_F",
    ]
  },
  {
    name: "nmLegs",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "CnvMed_Std_A_M",
      "CnvMed_Std_B_M",
      "CnvMed_Std_C_M",
      "CnvMed_Std_D_M",
    ],
    femaleVals: [
      "CnvMed_Std_A_F",
      "CnvMed_Std_B_F",
      "CnvMed_Std_C_F",
      "CnvMed_Std_D_F",
    ]
  },
  {
    name: "nmHelmet",
    type: "NameProperty",
    isGenderSpecific: true,
    // With no weighting system in place, add No Helmet a bunch of times
    // so that an army doesn have more hats than TF2
    maleVals: [
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Helmet_0_NoHelmet_M",
      "Hat_A_Ballcap_M",
      "Hat_B_Skullcap_M",
      "Hat_C_DressGray_M",
      "Hat_G_Headband_M",
      "Hat_D_BallcapBackwards_M",
      "Hat_F_BooniePinned_M",
      "Helmet_A_ReconHood_M",
      "Helmet_B_Shemagh_M",
      "Helmet_C1_Delta_M",
      "Helmet_C2_Delta_M",
      "Helmet_C3_Delta_M",
      "Helmet_C4_Delta_M",
      "Helmet_E_HockeyMask_M",
    ],
    femaleVals: [
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Helmet_0_NoHelmet_F",
      "Hat_A_Ballcap_F",
      "Hat_B_Skullcap_F",
      "Hat_C_DressGray_F",
      "Hat_G_Headband_F",
      "Hat_D_BallcapBackwards_F",
      "Hat_F_BooniePinned_F",
      "Helmet_A_ReconHood_F",
      "Helmet_B_Shemagh_F",
      "Helmet_C1_Delta_F",
      "Helmet_C2_Delta_F",
      "Helmet_C3_Delta_F",
      "Helmet_C4_Delta_F",
      "Helmet_E_HockeyMask_F",
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
    isGenderSpecific: true,
    // Add more weightings so that we have more blanks than props
    maleVals: [
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "None",
      "Cigarette",
      "Cigar",
      "Bandana1_M",
      "Bandana2_M",
      "Bandana3_M",
      "Bandana4_M",
    ],
    femaleVals: [
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "Prop_FaceLower_Blank",
      "None",
      "Cigarette",
      "Cigar",
      "Bandana1_F",
      "Bandana2_F",
      "Bandana3_F",
      "Bandana4_F",
    ]
  },
  {
    name: "nmFacePropUpper",
    type: "NameProperty",
    isGenderSpecific: true,
    // More lazy weightings
    maleVals: [
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "None",
      "Aviators_M",
      "PlainGlasses_M",
      "FancyGlasses_M",
      "HippyGlasses_M",
      "ClassySunglasses_M",
      "SportSunglasses_M",
      "HippySunglasses_M",
      "Monacle_M",
      "Eyepatch_M",
      "Earring_M",
      "NoseStud_M",
      "NoseRing_M",
      "BrowRing_M",
      "LipRing_M"
    ],
    femaleVals: [
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "Prop_FaceUpper_Blank",
      "None",
      "Aviators_F",
      "PlainGlasses_F",
      "FancyGlasses_F",
      "HippyGlasses_F",
      "ClassySunglasses_F",
      "SportSunglasses_F",
      "HippySunglasses_F",
      "Monacle_F",
      "Eyepatch_F",
      "Earring_F",
      "NoseStud_F",
      "NoseRing_F",
      "BrowRing_F",
      "LipRing_F"
    ]
  },
  {
    name: "nmPatterns",
    type: "NameProperty",
    vals: [
      "Hex",
      "Camo_A",
      "Camo_B",
      "Camo_Digital",
      "Camo_Arid",
      "Camo_Wilderness",
      "Camo_AlienFacility",
      "Camo_Tundra",
      "Pat_Nothing",
      "Shemag",
      "Tigerstripe",
      "Hearts",
      "Zebra",
      "PC_A",
      "Diagonals",
      "Stripes",
      "PolkaDots",
      "Plaid_A"
    ]
  },
  {
    name: "nmVoice",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
      "MaleVoice1_English_US",
      "MaleVoice2_English_US",
      "MaleVoice3_English_US",
      "MaleVoice4_English_US",
      "MaleVoice5_English_US",
      "MaleVoice6_English_US",
      "MaleVoice7_English_US",
      "MaleVoice8_English_US",
      "MaleVoice9_English_US",
      "MaleVoice10_English_US",

      "MaleVoice1_English_UK",
      "MaleVoice2_English_UK",
      "MaleVoice3_English_UK",
      "MaleVoice4_English_UK",

      "MaleVoice1_English_AUS",
      "MaleVoice2_English_AUS",

      "MaleVoice1_French",
      "MaleVoice2_French",
      "MaleVoice3_French",
      "MaleVoice4_French",
      "MaleVoice5_French",
      "MaleVoice6_French",
      "MaleVoice7_French",
      "MaleVoice8_French",
      "MaleVoice9_French",
      "MaleVoice10_French",

      "MaleVoice1_Italian",
      "MaleVoice2_Italian",
      "MaleVoice3_Italian",
      "MaleVoice4_Italian",
      "MaleVoice5_Italian",
      "MaleVoice6_Italian",
      "MaleVoice7_Italian",
      "MaleVoice8_Italian",
      "MaleVoice9_Italian",
      "MaleVoice10_Italian",

      "MaleVoice1_German",
      "MaleVoice2_German",
      "MaleVoice3_German",
      "MaleVoice4_German",
      "MaleVoice5_German",
      "MaleVoice6_German",
      "MaleVoice7_German",
      "MaleVoice8_German",
      "MaleVoice9_German",
      "MaleVoice10_German",

      "MaleVoice1_Spanish",
      "MaleVoice2_Spanish",
      "MaleVoice3_Spanish",
      "MaleVoice4_Spanish",
      "MaleVoice5_Spanish",
      "MaleVoice6_Spanish",
      "MaleVoice7_Spanish",
      "MaleVoice8_Spanish",
      "MaleVoice9_Spanish",
      "MaleVoice10_Spanish"
    ],
    femaleVals: [
      "FemaleVoice1_English_US",
      "FemaleVoice2_English_US",
      "FemaleVoice3_English_US",
      "FemaleVoice4_English_US",
      "FemaleVoice5_English_US",
      "FemaleVoice6_English_US",
      "FemaleVoice7_English_US",
      "FemaleVoice8_English_US",
      "FemaleVoice9_English_US",
      "FemaleVoice10_English_US",

      "FemaleVoice1_English_UK",
      "FemaleVoice2_English_UK",
      "FemaleVoice3_English_UK",
      "FemaleVoice4_English_UK",

      "FemaleVoice1_English_AUS",
      "FemaleVoice2_English_AUS",

      "FemaleVoice1_French",
      "FemaleVoice2_French",
      "FemaleVoice3_French",
      "FemaleVoice4_French",
      "FemaleVoice5_French",
      "FemaleVoice6_French",
      "FemaleVoice7_French",
      "FemaleVoice8_French",
      "FemaleVoice9_French",
      "FemaleVoice10_French",

      "FemaleVoice1_Italian",
      "FemaleVoice2_Italian",
      "FemaleVoice3_Italian",
      "FemaleVoice4_Italian",
      "FemaleVoice5_Italian",
      "FemaleVoice6_Italian",
      "FemaleVoice7_Italian",
      "FemaleVoice8_Italian",
      "FemaleVoice9_Italian",
      "FemaleVoice10_Italian",

      "FemaleVoice1_German",
      "FemaleVoice2_German",
      "FemaleVoice3_German",
      "FemaleVoice4_German",
      "FemaleVoice5_German",
      "FemaleVoice6_German",
      "FemaleVoice7_German",
      "FemaleVoice8_German",
      "FemaleVoice9_German",
      "FemaleVoice10_German",

      "FemaleVoice1_Spanish",
      "FemaleVoice2_Spanish",
      "FemaleVoice3_Spanish",
      "FemaleVoice4_Spanish",
      "FemaleVoice5_Spanish",
      "FemaleVoice6_Spanish",
      "FemaleVoice7_Spanish",
      "FemaleVoice8_Spanish",
      "FemaleVoice9_Spanish",
      "FemaleVoice10_Spanish"
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
      "Tattoo_Arms_BLANK",
      "Tattoo_Arms",
      "Tattoo_Arms_01",
      "Tattoo_Arms_02",
      "Tattoo_Arms_03",
      "Tattoo_Arms_04",
      "Tattoo_Arms_05",
      "Tattoo_Arms_06",
      "Tattoo_Arms_07",
      "Tattoo_Arms_08",
      "Tattoo_Arms_09"
    ]
  },
  {
    name: "nmTattoo_RightArm",
    type: "NameProperty",
    vals: [
      "Tattoo_Arms_BLANK",
      "Tattoo_Arms",
      "Tattoo_Arms_01",
      "Tattoo_Arms_02",
      "Tattoo_Arms_03",
      "Tattoo_Arms_04",
      "Tattoo_Arms_05",
      "Tattoo_Arms_06",
      "Tattoo_Arms_07",
      "Tattoo_Arms_08",
      "Tattoo_Arms_09"
    ]
  },
  {
    name: "nmScars",
    type: "NameProperty",
    vals: [
      "None",
      "Scars_BLANK",
      "Scars_01_Stitch",
      "Scars_02_Stitch",
      "Scars_03_Stitch",
      "Scars_04_Stitch",
      "Scars_05_Stitch",
      "Scars_06_Stitch",
      "Scars_07_Stitch",
      "Scars_08_Stitch",
      "Scars_09_Stitch",
      "Scars_01_Slash",
      "Scars_02_Slash",
      "Scars_03_Slash",
      "Scars_04_Slash",
      "Scars_05_Slash",
      "Scars_06_Slash",
      "Scars_07_Slash",
      "Scars_01_Burn",
      "Scars_02_Burn",
      "Scars_03_Burn"
    ]
  },
  {
    name: "nmTorso_Underlay",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
     "CnvUnderlay_Std_Torsos_A_M"
    ],
    femaleVals: [
     "CnvUnderlay_Std_A_F"
    ]
  },
  {
    name: "nmArms_Underlay",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
     "CnvUnderlay_Std_Arms_A_M"
    ],
    femaleVals: [
      "CnvMed_Underlay_A_F"
    ]
  },
  {
    name: "nmLegs_Underlay",
    type: "NameProperty",
    isGenderSpecific: true,
    maleVals: [
     "CnvUnderlay_Std_Legs_A_M"
    ],
    femaleVals: [
      "CnvUnderlay_Std_A_F"
    ]
  },
  {
    name: "nmFacePaint",
    type: "NameProperty",
    // Add weight to No props
    vals: [
      "None",
      "None",
      "None",
      "None",
      "None",
      "None",
      "Facepaint_BLANK",
      "Facepaint_Eyeblack",
      "Facepaint_SharpShooter"
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
      "Country_USA",
      "Country_UK",
      "Country_Ireland",
      "Country_Greece",
      "Country_Scotland",
      "Country_Sweden",
      "Country_Ukraine",
      "Country_Italy",
      "Country_Spain",
      "Country_Australia",
      "Country_Poland",
      "Country_Israel",
      "Country_Portugal",
      "Country_Germany",
      "Country_Mexico",
      "Country_Norway",
      "Country_Netherlands",
      "Country_Canada",
      "Country_Japan",
      "Country_SouthKorea",
      "Country_SouthAfrica",
      "Country_China",
      "Country_Russia",
      "Country_Argentina",
      "Country_Belgium",
      "Country_France",
      "Country_Egypt",
      "Country_Nigeria",
      "Country_Brazil",
      "Country_Turkey",
      "Country_Columbia",
      "Country_India",
      "Country_Iran",
      "Country_Pakistan",
      "Country_Venezuela"
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

    // Adding weight so VIPs are rarer
    vals: [
      true,
      false,
      false,
      false,
      false,
      false
    ]
  },
  {
    name: "AllowedTypeDarkVIP",
    type: "BoolProperty",

    // Make DarkVIPs very rare. 
    vals: [
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
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
