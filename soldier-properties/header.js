var props = [
  {
    name: "CharacterPool",
    type: "ArrayProperty",
    vals: [
      // TESTING: This should be dynamic, replaced with soldier count
      // Hard-coded with 2 as we're testing with a 2 soldier file
      2
    ]
  },
  {
    name: "PoolFileName",
    type: "StrProperty",
    vals: [
      "CharacterPool\\Importable\\DemoWithTwo.bin"
    ]
  }
]

module.exports = props;
