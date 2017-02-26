var props = [
  {
    name: "CharacterPool",
    type: "ArrayProperty",
    vals: [
      // TESTING: This should be dynamic, replaced with soldier count
      // Hard-coded with 1 as we're testing with a 1 soldier file
      1
    ]
  },
  {
    name: "PoolFileName",
    type: "StrProperty",
    vals: [
      "CharacterPool\\Importable\\Demo.bin"
    ]
  },
  {
    name: "None"
  }
]

module.exports = props;
