const fs =require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/file1.txt");
fs.onlinkSync(filePath);
