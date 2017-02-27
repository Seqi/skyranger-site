function XcomSoldierCreator(names){
  var buffer;
  var offset = 0;

  var isWritingHeader = true;

  const nullTerminator = Buffer.from([0]);

  this.createSoldiers = function(){
    initBuffer();

    // Load in the properties
    var props = require('../soldier-properties/all');
    props.forEach(writeProperty);

    return buffer;
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

    // TODO: Move 'None' handler elsewhere. As we are writing straight
    // to the buffer, it may not be possible to do it nicely.
    // If the 'None' is end of header, write the number of soldiers to buffer.
    if (prop.name === "None"){
        if (isWritingHeader){
          writeInt(names.length);
          isWritingHeader = false;
        }
        return;
    }

    console.log("type " + prop.type);
    writeString(prop.type);
    writeTab();

    var chosenVal = getRandomVal(prop);
    console.log("chosen " + chosenVal);
    switch(prop.type){

      case "StrProperty":
        writeInt(chosenVal.length + 5);
        writeTab();
        writeString(chosenVal);
        break;

      case "ArrayProperty":
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

      case "NameProperty":
        writeInt(chosenVal.length + 9);
        writeTab();
        writeString(chosenVal);
        // Workaround for the weird magic int that appears after
        // some NamePropertys
        var magicInt = prop.magic || 0;
        writeInt(magicInt);
        break;

      case "StructProperty":
        // TODO: Replace this with the struct length somehow
        // XCOM 2 doesn't seem to care what value is here however
        writeInt(2638);
        writeTab();
        writeString(chosenVal);
        writeTab();
        break;
    }
  }

  function writeString(str){
    // Get the length prefix (+1 for null terminator)
    var lengthBuffer = new Buffer.alloc(4);
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
    var intBuffer = Buffer.alloc(4);
    intBuffer.writeUInt32LE(num);
    appendToBuffer(intBuffer);
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
    var index = Math.floor(Math.random() * property.vals.length)
    return property.vals[index];
  }
}

module.exports = function(name){
  return new XcomSoldierCreator(name).createSoldiers();
}
