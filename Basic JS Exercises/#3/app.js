const total = document.querySelector(".total");
const moneyLeft = document.querySelector(".money-left");
const button = document.querySelector(".btn");
let apartment = 375;
let bills = 250;
function moneyCalculator() {
  let moneyLeftOnAccount = 1000 - apartment - bills;
  let totalBills = apartment + bills;
  moneyLeft.innerHTML += `He has ${moneyLeftOnAccount}$ left on his account`;
  total.innerHTML += `Total price of bills is ${totalBills}$`;
}
button.addEventListener("click", function () {
  moneyCalculator();
});
