const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

const User = {
  firstName: "Nikola",
  lastName: "Stojkovski",
};

emitter.on("Registration", (userData) => {
  console.log(
    `Thank you ${userData.firstName} ${userData.lastName} for registering to our page`
  );
});

emitter.emit("event", User);
