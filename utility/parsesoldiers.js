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

  this.validateFile = function(){
      var isValid = require('./xcvalidator')(this.buffer)
      if (isValid === false){
        throw new Error("File supplied is not a valid XCOM Character Pool.");
      }
  }

  this.parse = function(){
    this.buffer = load(path);
    console.log(this.buffer);
  }
}

function load(path){
  return fs.readFileSync(path);
}

module.exports = function(path){
  return new xcomPoolParser(path);
}
