const fs =require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file.txt");
console.log(fs.existsSync(filePath));
