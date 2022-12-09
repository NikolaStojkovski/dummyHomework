btn.onclick = function () {
  let year = prompt("What is your birth year?");

  let result = (year - 4) % 12;
  if (result === 0) {
    alert("Rat");
  } else if (result === 1) {
    alert("Ox");
  } else if (result === 2) {
    alert("Tiger");
  } else if (result === 3) {
    alert("Rabbit");
  } else if (result === 4) {
    alert("Dragon");
  } else if (result === 5) {
    alert("Snake");
  } else if (result === 6) {
    alert("Horse");
  } else if (result === 7) {
    alert("Goat");
  } else if (result === 8) {
    alert("Monkey");
  } else if (result === 9) {
    alert("Rooster");
  } else if (result === 10) {
    alert("Dog");
  } else if (result === 11) {
    alert("Pig");
  }
};
