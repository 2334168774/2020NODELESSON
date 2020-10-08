const events = require("events");
var EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;

}
Dog.prototype._proto_ = EventEmitter.prototype;
module.exports = Dog;