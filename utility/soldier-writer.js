function XcomSoldierCreator(name){
  var buffer;
  this.createSoldier = function(){
    // Initialise the buffer with the constant
    buffer = Buffer.from([255, 255, 255, 255]);
    log();
  }

  function log(){
    console.log(buffer);
  }
}

module.exports = function(name){
  return new XcomSoldierCreator(name).createSoldier();
}
