const fs = require("fs");
const path = require("path");

var fileName = process.argv[2] ;
var name = process.argv[2] + process.argv[3];

if(fileName == 'list'){
    var data = [];
    var list = fs.readdirSync(__dirname);
    for(var i=0;i<list.length;i++){
        var aa = fs.statSync(list[i]);
        data.push({'fileName':list[i],'fileSize':aa.size});
    }
    console.log(data);   
}else if(name == 'mkdirfolder'){
    fs.mkdirSync('folder');
       
}else{
    console.log("error");
}