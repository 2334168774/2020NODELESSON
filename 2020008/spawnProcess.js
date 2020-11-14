const cp = require("child_process");

var childProcess =  cp.spawn("node",["childProcess"]);
var result="";
childProcess.stdin.on("data",function(chunk){
    console.log(chunk);
    result += chunk;
})
childProcess.stdin.on("close",function(){
    console.log(result);
})
