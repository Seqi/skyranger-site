var fileSingleSoldier = "./template/Demo.bin";
var fileTwoSoldiers = "./template/DemoWithTwo.bin";

// Instantiate the xcom parser with the file
var fileBuffer = require('fs').readFileSync(fileSingleSoldier);
var soldierReader = require('./utility/soldier-reader');

var singleSoldier = soldierReader(fileBuffer);
singleSoldier.getSoldiers();
