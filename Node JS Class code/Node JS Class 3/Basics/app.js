const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();
//^ Addin a listener for event
emitter.on("event", () => {
  console.log("Event emitter");
});
//^ Emitting the event
emitter.emit("event");

emitter.on("data", (name) => {
  console.log(`This is the name you sent: ${name}`);
});
//! emitter.emit("data", "Nikola");

//! emitter.emit("data", ["ivo", "ivan"]);

//! setTimeout(() => {
//!  emitter.emit("data", "Damjan");
//!}, 2000);

//* emitter
//*  .on("event-one", () => console.log("Event one emitted"))
//*  .on("event-two", () => console.log("Event two emitted"));

//* emitter.emit("event-one");
//* emitter.emit("event-two");
const fullName = (firstName, lastName) => {
  console.log(`My name is ${firstName} ${lastName}`);
};

//* emitter.on("full-name", fullName);
//* emitter.emit("full-name", "Nikola", "Stojkovski");

//* emitter.on("sum-numbers", (a, b, c) => {
//*   console.log(a + b + c);
//* });
//* emitter.emit("sum-numbers", 4, 5, 6);

//* emitter.once("once", () => {
//*   console.log("Once event fired");
//* });
//* emitter.emit("once");

emitter
  .on("message", () => console.log("First message emitted"))
  .on("message", () => {
    console.log("Second message emitted");
  })
  .on("message", () => {
    console.log("Third message");
  })
  .prependListener("message", () => {
    console.log("Prepand listener");
  })
  .on("message", () => {
    console.log("Fourth message");
  })
  .prependListener("message", () => {
    console.log("Second prepand listener");
  });
emitter.emit("message");
