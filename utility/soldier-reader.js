// NB: To aid with the learning process of node/js, maybe seemingly obvious
// things are commented. Said things may be incorrect. If so, correct me!
var fs = require('fs');

var propertiesTested = 0;
var propertiesToTestCount = 6;

// This is the public object that is passed back, exposing any functions
// the caller might need.
function xcomPoolParser(path){
  this.offset = 0;
  this.buffer = [];

  this.getSoldiers = function(){
    this.load(path);

    // Using this "get next property" format as it lets me process the file
    // property by property for testing purposes.
    var props = [];
    while (!this.isEndOfFile()){

      // TODO: Handle "None" separator. For now we just dump everything here
      props.push(this.getNextProperty());
    }

    this.debugPrint(props);
  }

  this.debugPrint = function(props){
      for(var i = 0; i < props.length; i++){
        console.log("Name: " + props[i].name)
        console.log("Type: " + props[i].type);
        console.log("Value: " + props[i].val);
        console.log("Weird Num: " + props[i].weirdNum);
        console.log();
      }
  }

  this.load = function(path){
    this.buffer = fs.readFileSync(path);

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
    // TESTING PURPOSES:
    return propertiesTested++ >= propertiesToTestCount;
    //return this.offset >= this.buffer.length;
  }

  this.getNextProperty = function(){
      var prop = {};

      prop.name = this.readString();
      this.skipValue();

      // "None" acts as a separator between header/soldier and each soldier
      if (prop.name == "None"){
        this.readInt();
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

        case "ArrayProperty":
          prop.weirdNum = this.readInt();
          this.skipValue();
          prop.val = this.readInt();
          break;
      }

      return prop;
  }

  this.readString = function(){
    var length = this.readInt();

    var strBuffer = this.buffer.slice(this.offset, this.offset + length - 1);
    var val = strBuffer.toString("utf8");
    this.skipBytes(length);
    return val;
  }

  this.readInt = function(){
    var length = this.buffer.readUInt32LE(this.offset);
    this.skipBytes();
    return length;
  }

  // Attempts to skip a 4 byte buffer, ensuring the value matches (default 0).
  this.skipValue = function(expectedVal = 0){
    var bufferVal = this.buffer.readUInt32LE(this.offset);
    if (bufferVal !== expectedVal){
      throw new Error("Value mismatch." +
                      " Expected: " + expectedVal +
                      " Actual: " + bufferVal);
    }
    this.skipBytes();
  }

  this.skipBytes = function(count){
    // If a value was not provided, shift by the standard 4 bytes
    this.offset += (count || 4);
  }
}

module.exports = function(path){
  return new xcomPoolParser(path);
}
