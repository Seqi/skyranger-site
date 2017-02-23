var fileSingleSoldier = "./template/Demo.bin";
var fileTwoSoldiers = "./template/DemoWithTwo.bin";

// Instantiate the xcom parser with the file
var soldierReader = require('./utility/soldier-reader');

var singleSoldier = soldierReader(fileSingleSoldier);
singleSoldier.getSoldiers();

console.log("----------------------------------");

var twoSoldiers = soldierReader(fileTwoSoldiers);
twoSoldiers.getSoldiers();
