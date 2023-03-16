const EventEmitter = require("event");
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

emitter.on("event", (message) => {
  console.log(message);
  console.log("=".repeat(20));
  console.log("Fired from the main file");
});

module.exports = emitter;
