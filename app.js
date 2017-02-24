var file = "./template/DemoWithTwo.bin";

// Load in all potential properties
var props = require('./soldier-properties/all');
console.log(props);

// Instantiate the xcom parser with the file
var soldierReader = require('./utility/soldier-reader')(file);

//soldierReader.getSoldiers();
