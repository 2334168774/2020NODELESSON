const http = require("http");
const querystring = require("querystring");


http.createServer(function(req,res){
    var result = "";
    req.on("data",function(chunk){
        result += chunk;
    })
    req.on("end",function(chunk){
        console.log(result);
    })

}).listen(8081);
console.log("1111");