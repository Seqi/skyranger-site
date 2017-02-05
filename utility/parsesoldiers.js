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

  this.validateFile = function(){
    // Character pool bins all have an FF FF FF FF prefix
    this.skipBuffer(Buffer.from([255, 255, 255, 255]).readUInt32LE());
  }

  this.read = function(){
      this.readHeader();
  }

  this.readHeader = function(){
    // Read "CharacterPool"
    this.readString();
    // Skip tab
    this.skipBuffer();
    // Read "ArrayProperty"
    this.readString();
    this.parseArrayProperty();
    // Read "PoolFileName"
    this.readString();
    this.skipBuffer();
    // Read "StrProperty"
    this.readString();
    // Skip tab
    this.offset += 12;
    // Read file location
    this.readString();
  }

  this.parseStringProperty = function(){

  }

  this.parseArrayProperty = function(){
      // Skip 3 bytes
      this.offset += 12;
      var arraySize = this.readInt();
      console.log("array size: " + arraySize);
  }

  this.readInt = function(){
    var length = this.buffer.readUInt32LE(this.offset);
    console.log(this.buffer.slice(this.offset, this.offset + 4));
    this.shiftOffset();
    return length;
  }

  this.readString = function(){
    var length = this.readInt();

    var strBuffer = this.buffer.slice(this.offset, this.offset + length - 1);
    var val = strBuffer.toString("utf8");

    console.log(strBuffer);
    console.log(val);
    console.log(length);
    this.shiftOffset(length);
    return val;
  }

  // Attempts to skip a 4 byte buffer, ensuring the value matches (default 0).
  this.skipBuffer = function(expectedVal = 0){
    var bufferVal = this.buffer.readUInt32LE(this.offset);
    if (bufferVal !== expectedVal){
      throw new Error("Attempted to move past a non-zero")
    }
    this.shiftOffset();
  }

  this.shiftOffset = function(count){
    // If a value was not provided, shift by the standard 4 bytes
    this.offset += (count || 4);
  }

  this.load = function(path){
    this.buffer = fs.readFileSync(path);
  }
}

module.exports = function(path){
  return new xcomPoolParser(path);
}
