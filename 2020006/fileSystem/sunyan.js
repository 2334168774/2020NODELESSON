const http = require("http");
const fs = require("fs");
const path = require("path");
//资源路径
const url = require("url");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    switch(pathName){
        // http://localhost:8081/
        case "/":
            showIndex(res);
            break;
        //网页文件在浏览器解析的过程中，如果需要一些资源，
        //会再次的向服务器端发起请求。
        //图片、音频、视频、js脚本、css文件
        case "/1.png":
            showImg(res);
            break;
        case "/getfilelist":
            showList(res);
            break;
    }
}).listen(8081);
console.log("server is listening 8081");
function showIndex(res){
    var indexPath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showImg(res){
    var imgPath = path.join(__dirname,"1.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(imgContent);
    res.end();
}
function showList(res){
    var filePath = path.join(__dirname,"fileDir");
    var files = fs.readdirSync(filePath);
    // console.log(files);
    var list = [];
    for(var i=0;i<files.length;i++){
        var fileObj={};
        var childPath = path.join(filePath,files[i]);
        var statObj = fs.statSync(childPath);
        // console.log(statObj);
        if(statObj.isFile()){
            fileObj.fileType="file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+1)
            +"-"+birthTimer.getDate()+birthTimer.getHours()+":"+birthTimer.getMinutes()+":"
            +birthTimer.getSeconds();
        list.push(fileObj);
    }
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}