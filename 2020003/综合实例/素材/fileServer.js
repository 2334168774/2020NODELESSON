const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");

http.createServer(function(req,res){
    fs.readFile("./1.png",function(err,data){
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(data);
        res.end();
    })
}).listen(8081);
console.log("服务器听着8081呢")


// http.createServer(function(req,res){
//     var pathName = url.parse(req.url).pathName;
//     if(pathName.indexOf(".") == -1){
//         pathName = "index.html";
//     }
//     var exname = path.exname(pathName);
//     res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
//     fs.readFile(pathName,function(err,data){
//         if(err){
            
//         }
//     })
// })