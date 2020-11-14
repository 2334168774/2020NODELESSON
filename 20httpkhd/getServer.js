const http = require('http');

http.createServer(function(req,res){
    res.end(" h w");
}).listen(8081)