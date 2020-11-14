const http=require("http");

http.createServer(function(req,res){
    var result="";
    req.on("data",function(chunk){
        result+=chunk;
    })

    req.on("end",function(){
        console.log(result);
    })

}).listen(8081)