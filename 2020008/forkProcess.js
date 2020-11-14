const cp = require("child_process");

cp.fork("childProcess1.js",["javascript"]);

fork1.on("close",function(chunk){
    console.log(chunk.toString());
})