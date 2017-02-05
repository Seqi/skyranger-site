// NB: To aid with the learning process of node/js, maybe seemingly obvious
// things are commented. Said things may be incorrect. If so, correct me!

// The use of strict ensures that xcomPoolParser is instantiated rather than
// referenced. If references, this.offset creates a global variable. If
// instantiated, it creates a variable in the scope of the object only.
"use strict";

var fs = require('fs');

// This is the public object that is passed back, exposing any functions
// the caller might need.
function xcomPoolParser(path){
  this.offset = 0;
  this.buffer = [];

  this.parse = function(){
    this.load(path);
    this.validateFile();
    this.read();
  }

  this.read = function(){
    var str = "";
    while(this.offset < this.buffer.length){
      var strLength = this.readStringLength();
      if (strLength >= 4){
        str += this.buffer.toString("utf8", this.offset, this.offset + strLength - 1);
        this.offset += strLength;
      }

      console.log();
    }

    console.log(str);
  }

  this.readStringLength = function(){
    var length = this.buffer.readUInt32LE(this.offset);

    console.log(this.buffer[this.offset].toString() +
    " " + this.buffer[this.offset + 1].toString() +
    " " + this.buffer[this.offset + 2].toString() +
    " " + this.buffer[this.offset + 3].toString());


    console.log("shifting by: " + length);

    this.shiftOffset();
    return length;
  }

  // Attempts to skip a 4 byte buffer, ensuring the value is empty.
  this.skipZeroBuffer = function(){
    var bufferVal = buffer.readUInt32LE(this.offset);
    if (bufferVal !== 0){
      throw new Error("Attempted to move past a non-zero")
    }
    this.shiftOffset();
  }

  // Character pool bins all have an FF FF FF FF prefix, ensure this is the case
  // TODO: This is basically skipZeroBuffer but 255 instead of 0. Refactor this.
  this.validateFile = function(){
    var xcomBinPrefix = Buffer.from([255, 255, 255, 255]);
    var prefix = this.buffer.slice(0, 4);

    var isValid = xcomBinPrefix.equals(prefix);
    if (isValid === false){
      throw new Error("File supplied is not a valid XCOM Character Pool.");
    }
    this.shiftOffset();
  }

  this.shiftOffset = function(count){
    // If a value was not provided, shift by the standard 4 bytes
    this.offset += (count || 4);
    console.log("shifting by " + (count || 4));
  }

  this.load = function(path){
    this.buffer = fs.readFileSync(path);
  }
}

module.exports = function(path){
  return new xcomPoolParser(path);
}
