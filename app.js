var file = "./template/DemoWithTwo.bin";
// Instantiate the xcom parser with the file
var soldierReader = require('./utility/soldier-reader')(file);

soldierReader.getSoldiers();
