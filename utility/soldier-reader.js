// NB: To aid with the learning process of node/js, maybe seemingly obvious
// things are commented. Said things may be incorrect. If so, correct me!
var fs = require('fs');

var isParsingCharacter = false;
var isParsingStruct = false;

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
        var prop = this.getNextProperty();

	if (prop.name == "None"){
	     // If we are parsing a struct and hit 'None', it is the end of the
             // struct, so we handle by not reading in the random integer suffix
             if (isParsingStruct){
                 console.log("no longer parsing struct");
                 isParsingStruct = false;
             }

            // If we are parsing a character and not a struct, we don't want to
            // read in the int
            else if (isParsingCharacter){
              console.log("no longer parsing character");
              isParsingCharacter = false;
            }

            else{
              console.log("now parsing character");
              this.readInt();
              isParsingCharacter = true;
            }
      }

      props.push(prop);
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
    return this.offset >= this.buffer.length;
  }

  this.getNextProperty = function(){
      var prop = {};

      console.log("Offset: " + this.offset);
      prop.name = this.readString();
      console.log("Name: " + prop.name)
      this.skipValue();

      // "None" acts as a separator between header/soldier and each soldier
      if (prop.name === "None"){
        return prop;
      }

      prop.type  = this.readString();
      console.log("Type: " + prop.type);
      this.skipValue();


      // TODO: Refactor
      switch(prop.type){

        case "StrProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readString();
          console.log("Value: " + prop.val);
          break;

        case "IntProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readInt();
          console.log("Value: " + prop.val);
          break;

        case "BoolProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readBool();
          console.log("Value: " + prop.val);
          break;

        case "ArrayProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readInt();
          console.log("Value: " + prop.val);
          break;

        case "NameProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readString();
          console.log("Value: " + prop.val);

          // TODO: Find out why this int is at the name of every NameProperty
          // Other than one instance found so far, this num is 0
          this.readInt();
          break;

        case "StructProperty":
          prop.weirdNum = this.readInt();
          console.log("Weird Num: " + prop.weirdNum);
          this.skipValue();
          prop.val = this.readString();
          console.log("Value: " + prop.val);
          this.skipValue();
          isParsingStruct = true;
          break;
      }
      console.log();
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


module.exports = function(path){
  return new xcomPoolParser(path);
}
