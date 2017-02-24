function XcomSoldierCreator(name){
  var buffer;
  var offset = 0;

  const nullTerminator = Buffer.from([0]);

  this.createSoldier = function(){
    initBuffer();
    writeString("CharacterPool");
    log();
  }

  // Initialise the buffer with the constant
  function initBuffer(){
    buffer = Buffer.from([255, 255, 255, 255]);
    skipBytes();
  }

  function writeString(str){
    // Get the length prefix (+1 for null terminator)
    var lengthBuffer = new Buffer(4);
    lengthBuffer.writeUInt32LE(str.length + 1);

    // Get a binary representation of the text
    var valBuffer = Buffer.from(str, "utf8");

    // Concat with a null terminator
    var result =  Buffer.concat([lengthBuffer, valBuffer, nullTerminator]);

    // Append and move offset
    buffer = Buffer.concat([buffer, result]);
    skipBytes(result.length);
  }

  function writeInt(num){
    buffer.writeUInt32LE(10, 0);
    skipBytes();
  }

  function skipBytes(count){
     offset += count >= 0 ? count : 4;
  }

  function log(){
    console.log("Offset: " + offset);
    console.log("Buffer:");
    console.log(buffer);
    console.log();
  }
}

module.exports = function(name){
  return new XcomSoldierCreator(name).createSoldier();
}
