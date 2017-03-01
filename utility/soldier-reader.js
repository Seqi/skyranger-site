// NB: To aid with the learning process of node/js, maybe seemingly obvious
// things are commented. Said things may be incorrect. If so, correct me!
var fs = require('fs');

// This is the public object that is passed back, exposing any functions
// the caller might need.
function xcomPoolParser(inBuffer){
  this.offset = 0;
  this.buffer = [];

  var isReadingStruct = false;

  this.getSoldiers = function(){
    this.load();

    // Using this "get next property" format as it lets me process the file
    // property by property for testing purposes.
    var props = this.readHeader();
    var soldier = {};

    while (!this.isEndOfFile()){
      var prop = this.getNextProperty();

      if (prop.name == "None"){
        // If we are parsing a struct and hit 'None', we don't want to push a
        // new soldier and just ignore it.
        if (isReadingStruct){
          isReadingStruct = false;
        }

        // If we are parsing a character and not a struct, we want to push the
        // current soldier to the array
        else {
          props.soldiers.push(soldier);
          soldier = {};
        }
      }
      else{
        soldier[prop.name] = prop;
      }
    }

    return props;
  }

  this.readHeader = function(){
    // Create a container for soldiers along with the header
    var header = {soldiers : []};
    var prop = this.getNextProperty();
    while(prop.name != "None"){
      header[prop.name] = prop;
      prop = this.getNextProperty();
    }

    this.readInt();
    return header;
  }

  this.load = function(){
    this.buffer = inBuffer;

    try{
      this.validateFile();
    }
    catch (err){
      console.log("File header not correct.");
    }
  }

  this.validateFile = function(){
    // Character pool bins all have an FF FF FF FF prefix
    // Skip over first 4 bytes, ensuring they match this value
    this.skipValue(Buffer.from([255, 255, 255, 255]).readUInt32LE());
  }

  this.isEndOfFile = function(){
    return this.offset >= this.buffer.length;
  }

  this.getNextProperty = function(){
    var prop = {};

    prop.name = this.readString();
    this.skipValue();

    // "None" acts as a separator between header/soldier and each soldier
    if (prop.name === "None"){
      return prop;
    }

    prop.type  = this.readString();
    this.skipValue();

    // TODO: Refactor
    switch(prop.type){

      case "StrProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readString();
      break;

      case "IntProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readInt();
      break;

      case "BoolProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readBool();
      break;

      case "ArrayProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readInt();
      break;

      case "NameProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readString();

      // TODO: Find out why this int is at the name of every NameProperty
      // Other than one instance found so far, this num is 0
      this.readInt();
      break;

      case "StructProperty":
      prop.weirdNum = this.readInt();
      this.skipValue();
      prop.val = this.readString();
      this.skipValue();

      // Flag so that the next None doesn't get counted as 'end of soldier'
      isReadingStruct = true;
      break;
    }

    return prop;
  }

  this.readString = function(){
    var length = this.readInt();
    var strBuffer = this.buffer.slice(this.offset, this.offset + length - 1);
    this.skipBytes(length);
    return strBuffer.toString("utf8");;
  }

  this.readInt = function(){
    var length = this.buffer.readUInt32LE(this.offset);
    this.skipBytes();
    return length;
  }

  this.readBool = function(){
    var falseVal = Buffer.from([00]);
    var trueVal = Buffer.from([01]);

    var boolVal = this.buffer.slice(this.offset, this.offset + 1);
    this.skipBytes(1);

    if (boolVal.equals(trueVal)){
      return true;
    }
    else if (boolVal.equals(falseVal)){
      return false;
    }
    else throw new Error("Could not read bool value");

  }

  // Attempts to skip a 4 byte buffer, ensuring the value matches (default 0).
  this.skipValue = function(expectedVal = 0){
    var bufferVal = this.readInt();
    if (bufferVal !== expectedVal){
      throw new Error("Value mismatch. Expected: " + expectedVal + " Got: " + bufferVal);
    }
  }

  this.skipBytes = function(count){
    // If a value was not provided, shift by the standard 4 bytes
    this.offset += (count >= 0 ? count : 4);
  }
}


module.exports = function(inBuffer){
  return new xcomPoolParser(inBuffer);
}
