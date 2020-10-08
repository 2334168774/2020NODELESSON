const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname,"/from.txt");
var writePath = path.join(__dirname,"/to.txt");
var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(writePath);
//fun1.pipe(fun2)：把fun1的内容 传输到fun2
readStream.pipe(writeStream);
