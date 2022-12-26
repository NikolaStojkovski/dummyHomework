const numbersArr = [5, 2, 5, 3, 51, 235, 53];
const list = document.querySelector(".list");
sum = 0;
console.log(list);
function numberPrinting(numbersArr) {
  for (let i = 0; i < numbersArr.length; i++) {
    list.innerHTML += `<li>${numbersArr[i]}</li>`;
    sum += numbersArr[i];
  }
  return (list.innerHTML += `<h3> The sum is: ${sum}</h3>`);
}
numberPrinting(numbersArr);
