var timerId = setTimeout(function(){
    console.log("gameover");
},300);
//阻止延时执行或者定时执行 回调函数的执行
//  timerId.unref();
//timerId.ref();