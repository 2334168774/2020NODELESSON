var https = require("https");

var apiUrl = "https://api.jisuapi.com/weather/query?appkey=6d074078756352b6&city=石家庄";
//发请求之前，需要把url处理一下，因为有中文

apiUrl = encodeURI(apiUrl);

https.get(apiUrl,function(res){
    var result = "";
    res.on("data",function(chunk){
        result += chunk;
    })
    res.on("end",function(){
        console.log(result);
    })
})
