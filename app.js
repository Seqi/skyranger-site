var file = "./template/Demo.bin";
// Instantiate the xcom parser with the file
var xcomParser = require('./utility/parsesoldiers')(file);

xcomParser.parse();
