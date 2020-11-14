const events = require("events");
var eventEmitter = new events.eventEmitter();
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
eventEmitter.emit("hello","node","good");