function sayHello(){
    console.log("hw");
}
function showName(){
    console.log(userName);
}
var userName = "zhangsan";
module.exports = {
    sayHello:sayHello,
    showName:showName
} 