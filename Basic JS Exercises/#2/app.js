const inputNumberOne = document.querySelector(".number-one");
const inputNumberTwo = document.querySelector(".number-two");
const body = document.querySelector("body");
const button = document.querySelector(".btn");
function numberGame() {
  let numOne = 100 - inputNumberOne.value;
  let numTwo = 100 - inputNumberTwo.value;
  if (numOne < numTwo) {
    body.innerHTML += `<h2>${inputNumberOne.value} is closer to 100</h2>`;
  } else body.innerHTML += `<h2>${inputNumberTwo.value} is closer to 100</h2>`;
}
button.addEventListener("click", function () {
  numberGame();
});
