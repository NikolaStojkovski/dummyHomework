const nameInput = document.querySelector(".name");
const kindInput = document.querySelector(".kind");
const messageInput = document.querySelector(".message");
const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const animal = {
  name: nameInput.value,
  kind: kindInput.value,
  speak: function (kind, name, message) {
    body.innerHTML = `<h2>${kind} ${name} says: ${message}</h2>`;
  },
};
btn.addEventListener("click", function () {
  animal.speak(kindInput.value, nameInput.value, messageInput.value);
});
