"use strict";
const md5 = require("md5");

const generateDifficultHash = function generateDifficultHash (base) {
  const finalBase = (base ? base + "-" + (new Date().toISOString()) : (new Date().toISOString()));
  return md5(finalBase);
};
module.exports = generateDifficultHash;