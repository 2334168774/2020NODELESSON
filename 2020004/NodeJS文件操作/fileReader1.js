// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// var filePath = path.join(__dirname,"/test1.txt");
// http.createServer(function(req,res){
//     fs.readFile(filePath,function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(data.toString());
//         }
//     })
//     res.end();
// }).listen(8081);
const http = require("http");
const path = require("path");
const fs = require("fs");
var fileName = process.argv[2];//argv[0]=0  argv[1]=当前js文件路径 

http.createServer(function(req,res){
    if(fileName == undefined){
        var str = "hello";
        /**
         * fs.readFile()是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行后面的语句。
         * 回调函数是等到文件读取完成后才执行
         */
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                str = (data.toString());
                res.end(str);
            }            
        })        
    }
    else{
        var pathName = path.join(__dirname,fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end(data.toString());
                }
            })
        }
    }
}).listen(8081);
console.log("sb")

