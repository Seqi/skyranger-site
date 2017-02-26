function XcomSoldierCreator(name){
  var buffer;
  var offset = 0;

  const nullTerminator = Buffer.from([0]);

  this.createSoldier = function(){
    initBuffer();

    // Load in the properties
    var props = require('../soldier-properties/all');

    // TODO: Replace with props.forEach after testing
    var propsToWriteCount = 1;;
    for(var propCount = 0; propCount < propsToWriteCount; propCount++){
          writeProperty(props[propCount]);
    }

    log();
  }

  // Initialise the buffer with the constant
  function initBuffer(){
    buffer = Buffer.from([255, 255, 255, 255]);
    skipBytes();
  }

  function writeProperty(prop){
    console.log("writing " + prop.name);
    writeString(prop.name);
    writeTab();

    console.log("type " + prop.type);
    writeString(prop.type);

    var chosenVal = getRandomVal(prop);
    switch(prop.type){
      case "StrProperty":
        writeInt(chosenVal.length + 4);
        writeTab();
        writeString(chosenVal);
        break;

      case "IntProperty":
        writeInt(4);
        writeTab();
        writeInt(chosenVal);
        break;

      case "BoolProperty":
        writeInt(0);
        writeTab();
        writeBool(chosenVal);
        break;

      case "ArrayProperty":
        break;

      case "NameProperty":
        writeInt(chosenVal.length + 8);
        break;

      case "StructProperty":
        break;
    }
  }

  function writeString(str){
    // Get the length prefix (+1 for null terminator)
    var lengthBuffer = new Buffer(4);
    lengthBuffer.writeUInt32LE(str.length + 1);

    // Get a binary representation of the text
    var valBuffer = Buffer.from(str, "utf8");

    // Concat with a null terminator
    var bufferLength = str.length + 5;
    var bufferArray = [lengthBuffer, valBuffer, nullTerminator];
    var result =  Buffer.concat(bufferArray, bufferLength);

    appendToBuffer(result);
  }

  function writeInt(num){
    buffer.writeUInt32LE(10, 0);
    skipBytes();
  }

  function writeBool(val){
    var boolBuffer = Buffer.from(val ? [1] : [0]);
    appendToBuffer(boolBuffer);
  }

  function writeArray(arr){
    writeInt(arr);
  }

  function writeName(name){
    writeString(name);
  }

  function writeTab(){
    var tabBuffer = Buffer.from([0, 0, 0, 0]);
    appendToBuffer(tabBuffer);
  }

  function skipBytes(count){
     offset += count >= 0 ? count : 4;
  }

  function appendToBuffer(bytes){
    buffer = Buffer.concat([buffer, bytes]);
    skipBytes(bytes.length);
  }

  function getRandomVal(property){
    var index = Math.floor(Math.random() * property.length);
    return property.vals[index];
  }

  function log(){
    console.log("Offset: " + offset);
    console.log("Buffer: " + buffer.toString('hex'));
    console.log();
  }
}

module.exports = function(name){
  return new XcomSoldierCreator(name).createSoldier();
}
