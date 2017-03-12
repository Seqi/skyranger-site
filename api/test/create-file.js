var fs = require('fs')
var soldierWriter = require('../src/soldier-writer');
var generateSoldiers = require('./testData').generateSoldiers
var newSoldier = soldierWriter(generateSoldiers());

fs.writeFile("../Custom.bin", newSoldier, function(err){
  if (err){
    console.log("Error " + err);
  }

  console.log("Saved!");
})
