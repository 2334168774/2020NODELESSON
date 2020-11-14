const http=require("http");
const fs=require("fs");
const url=require("url");
const path=require("path");
http.createServer(function(req,res){
    var urlObj=url.parse(req.url);
    var pathName=urlObj.pathname;
    if(pathName=='/'){
        showIndex(res);
    }
    else if(pathName=='/list'){
        showList(res);
    }
    else if(pathName=='/image.png'){
        showImg(res);
    }
    else if(pathName=='/upload'&&req.method=='POST')//判断发起的是什么请求 
    {
        uploadFile(req,res);
    }
    else if(pathName.indexOf('upload')>=0&&req.method=='GET'){
        var imgSrc=path.join(__dirname,pathName);
        var imgContent=fs.readFileSync(imgSrc);
        res.writeHead(200,{"Content-Type":"image/png"});
        res.write(imgContent);
        res.end();
    }
    else if(pathName=='/getlist'){
        var files=fs.readdirSync(__dirname+'/upload');
        var fileStr=JSON.stringify(files);
        res.end(fileStr);
    }
}).listen(8081)
console.log("server is listening 8081");
function showIndex(res){
    var indexPath = path.join(__dirname,"./index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showImg(res){
    var imgPath=path.join(__dirname,'image.png');
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(imgContent);
}
function showList(res){
    var indexPath = path.join(__dirname,"/list.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function uploadFile(req,res){
    var dataStr='';
    req.setEncoding("binary");
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        var totalArr=dataStr.split('\r\n');
        var bufArr=totalArr.slice(4,totalArr.length-2);
        var imgData="";
        for(var i=0;i<bufArr.length;i++){
            imgData+=bufArr[i];
        }
        fs.writeFileSync(__dirname+"\\upload\\file.png",imgData,{"encoding":"binary"});
        res.end("submit sucess");
    })
}
/**
 * 地址栏中发起http请求
 * 超链接发起http
 * 提交表单发起请求
 * ajax发起请求
 * <script src>
 * <img src>
 */