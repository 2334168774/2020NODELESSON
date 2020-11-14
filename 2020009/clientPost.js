const http=require("http");
const querystring=require("querystring");//第三方模块，需要安装一下,该模块的作用就是将一个对象转换成一个服务器可以接受的字符串
var infor={"user":"zhangsan"};//定义一个对象
var str=querystring.stringify(infor);

var options={
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}

var req=http.request(options,function(res){

});//请求对象

req.write(str);
req.end();