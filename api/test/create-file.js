var fs = require('fs')
var soldierWriter = require('../src/soldier-writer');
var generateSoldiers = require('./testData').generateSoldiers
var newSoldier = soldierWriter(generateSoldiers());

// You don't really need to test fs.writeFile() because the Node developers have tests for that
// As long as you pass in the right variables, it should work every time

fs.writeFile("../Custom.bin", newSoldier, function(err){
  if (err){
    console.log("Error " + err);
  }

  console.log("Saved!");
})
