let errorMess = alert("You have no money please deposit some");
let accountMoney;
function checkBalance() {
  alert(`Your current balance is ${accountMoney}`);
}
function withdraw() {
  let withdraw = prompt("How much money would you like to withdraw");
  if (withdraw <= accountMoney) {
    accountMoney = accountMoney - withdraw;
    alert(`You withdraw ${withdraw} and your balance now is ${accountMoney}`);
  } else if (withdraw > accountMoney) {
    alert(`You dont have enough money your balance is ${accountMoney}`);
  }
}
function deposit() {
  accountMoney = prompt("How much money would you like do deposit");
}
