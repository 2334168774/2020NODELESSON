/**
 * 调试：检测代码是否执行到console.log的位置
 * 输出一些变量的值，判断程序的执行状态
 * 
 */
/**
 * 占位符：%d %s %j
 * %s表示字符串  %d表示数字 %j表示json数组
 */
var user = {
    username:"lisi",
    age:20,
    QQ:"1234567",
}
console.log("username:%s",user.username);
console.log("username:%d",user.age);
console.log("username:%j",user.QQ);