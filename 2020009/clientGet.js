const http=require("http");

http.get("http://loathost:8081",function(res){
    var result="";
    res.on("data",function(chunk){
        result+=chunk;
    })
    res.on("end",function(){
        console.log(result);
    })

})//可以直接指明一个url,可以是自己本地写的也可以是网址