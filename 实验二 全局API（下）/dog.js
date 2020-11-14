const event = require("event");
var eventEmitter = new event.EventEmitter();
eventEmitter.on(function(name,energe){
    console.log(name,energe);
})