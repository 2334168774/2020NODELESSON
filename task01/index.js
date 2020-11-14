const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const queryString = require('querystring');
let { chapterList, userList } = require('./homework02');

http.createServer((req,res)=>{
    var urlObj = url.parse(req.url);
    var pathName = urlObj.pathname;
    if(pathName == '/list'){
        var listPath = path.join(__dirname,'./chapterList.html');
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(fileContent);
        res.end();
    }
    else if(pathName == '/detail'){
        var listPath = path.join(__dirname,'./chapter.html');
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(fileContent);
        res.end();
    }
    else if(pathName == '/login'){
        var listPath = path.join(__dirname,'./login.html');
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(fileContent);
        res.end();
    }
    else if(pathName == '/listmanager'){
        var listPath = path.join(__dirname,'./list.html');
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(fileContent);
        res.end();
    }
    else if(pathName == '/addChapter'){
        var listPath = path.join(__dirname,'./addChapter.html');
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write(fileContent);
        res.end();
    }
    else if(pathName.indexOf('jpg')>=0){
        var listPath = path.join(__dirname,pathName);
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "image/jpg"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName.indexOf('png')>=0){
        var listPath = path.join(__dirname,pathName);
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "image/png"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName.indexOf('css')>=0){
        var listPath = path.join(__dirname,pathName);
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/css"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName.indexOf('js')>=0){
        var listPath = path.join(__dirname,pathName);
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "text/js"});
        res.write(fileContent);
        res.end();
    }
    else if(pathName.indexOf('jpeg')>=0){
        var listPath = path.join(__dirname,pathName);
        var fileContent  = fs.readFileSync(listPath);
        res.writeHead(200, { "Content-Type": "image/jpeg"});
        res.write(fileContent);
        res.end();
    }

    //做法
    else if (pathName== '/getList') {
        var str = JSON.stringify(chapterList);
        res.end(str);
    }


    else if (pathName== '/getLogin') {
        var postData = "";
        req.on("data", function (chunk) {
            postData += chunk;
        });
        req.on("end", function () {
            var u = queryString.parse(postData);
            var username = u.username;
            var password = u.password;
            // console.log(username,password);
            var i = 0;
            for (i = 0; i < userList.length; i++) {
                if (userList[i].username == username && userList[i].pwd == password) {
                    data = 1;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(data));
                    return;
                }
            }
            data = 0;
            console.log(data);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }


    else if (urlObj.pathname == '/getDetail') {
        console.log(urlObj.pathname);
        console.log("dd");
        var chapterId = queryString.parse(urlObj.query).chapterId;
        var dataList = [];
        chapterList.forEach((data, index) => {
            if (data.chapterId == chapterId) {
                dataList.push(data);
            }
        })
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var str = JSON.stringify(dataList);
        res.end(str);

    }



    else if (urlObj.pathname == '/add') {
        var postData = "";
        req.on("data", function (chunk) {
            postData += chunk;
        });
        req.on("end", function () {
            var a = queryString.parse(postData);
            var title = a.title;
            var content = a.content;
            var date = new Date();
            var newP = {
                "chapterId": chapterList[chapterList.length - 1].chapterId + 1,
                "chapterName": title,
                "imgPath": "",
                "chapterDes": content,
                "chapterContent": content,
                "publishTimer": `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                "author": "admin",
                "views": 0
            }
            chapterList.push(newP);
            data = { code: 0 };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        });
    }


    else if (urlObj.pathname == "/delChapter") {
        var chapterId = queryString.parse(urlObj.query).chapterId;
        console.log(urlObj.query);
        for (var i = 0; i < chapterList.length; i++) {
            if (chapterList[i].chapterId == chapterId) {
                chapterList.splice(i, 1);
                data = 1;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
                return;
            }
        }
        data = 0;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    }
}).listen(8083)
