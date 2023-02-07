const math = document.querySelector(".math");
const science = document.querySelector(".science");
const music = document.querySelector(".music");
const art = document.querySelector(".art");
const sport = document.querySelector(".sport");
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const numbersArr = [];
let sum = 0;
function inputs() {
  let math = math.value;
  let science = science.value;
  let music = music.value;
  let art = art.value;
  let sport = sport.value;
  numbersArr.push(math);
  numbersArr.push(science);
  numbersArr.push(music);
  numbersArr.push(art);
  numbersArr.push(sport);
}
function reset() {
  math.value = "";
  science.value = "";
  music.value = "";
  art.value = "";
  sport.value = "";
}
function average(numbersArr) {
  for (let number of numbersArr) {
    sum += numbersArr[number];
  }
  result.innerHTML += `<h3>The average is: ${sum / 5}</h3>`;
}
button.addEventListener("click", function () {
  inputs();
  average(numbersArr);
  reset();
});
console.log(numbersArr);
