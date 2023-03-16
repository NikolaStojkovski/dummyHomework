const EventEmitter = require("events");
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on("random-event", () => {
  console.log("Random Text");
});

module.exports = emitter;
