const cp = require("child_process");
/**
 * 执行shell指令，启动一个子进程
 * notepad mstsc
 * 
 * exec(命令，回调函数) 除了可以启动node的进程，
 * 还可以执行shell指令，启动进程
 */
cp.exec("notepad",function(err,stdout,stderr){
    console.log(typeof err);
    console.log(typeof stdout);
    console.log(typeof stderr);
})