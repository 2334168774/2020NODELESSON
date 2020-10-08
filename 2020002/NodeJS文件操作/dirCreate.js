const fs =require("fs");
// const path = require("path");
//fs.mkdirSync("hw");
var list = fs.readdirSync(__dirname);
console.log(list);
var files = fs.rmdirSync(path.join(__dirname,"/node"));
fs.unlinkSync(path.join(__dirname,"/node/"+files[0]));
fs.rmdirSync(path.join(__dirname,"/node"));
