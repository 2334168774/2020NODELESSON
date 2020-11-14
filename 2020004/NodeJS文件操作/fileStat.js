const fs =require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
var statObj = fs.statSync(filePath);
console.log(statObj.isFile());
console.log(statObj);