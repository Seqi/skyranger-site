function propertyBag(){
this.properties =
[
  {
    name: "strFirstName",
    type: "StrProperty",
    vals: [
    ]
  },
  {
    name: "strLastName",
    type: "StrProperty",
    vals: [
    ]
  },
  {
    name: "strNickName",
    type: "StrProperty",
    vals: [
    ]
  },
  {
    name: "m_SoldierClassTemplateName",
    type: "NameProperty",
    vals: [
      "Rookie"
    ]
  },

  {
    name: "CharacterTemplateName",
    type: "NameProperty",
    vals: [
      "Soldier"
    ]
  },
]
}

// We cannot call the function here as it won't instantiate a new instance
// of the properties. This may be due to Node caching it? If we then call the
// require as a function later, it will instantiate.
module.exports = function() {
  return new propertyBag().properties;
};
