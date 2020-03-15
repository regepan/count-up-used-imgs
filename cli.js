#!/usr/bin/env node
"use strict";

const path = require('path');
const symbols = require("log-symbols");
const glob = require("glob");

function find(pattern) {
  glob(pattern, function (err, files) {
    if (err) {
      console.log(err);
    }

    console.log(pattern);
    console.log(files);
  });
}

var pattern = "**/*.js";
find(pattern);

pattern = "**/glo?.js";
find(pattern);

pattern = "**/*[0-9]*.js";
find(pattern);







// const checkWhiteSpace = function (fileName) {
//   return fileName.match(/\s/);
// };
// 
// module.exports.checkWhiteSpace = checkWhiteSpace;

