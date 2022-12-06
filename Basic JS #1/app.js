let phonePrice = 119.95;
let phoneNumber = prompt("Enter how many phones you want to buy");
let taxRate = 5;
let tax = (phonePrice / 100) * taxRate;
let priceAfterTax = (phonePrice + tax) * phoneNumber;
alert("Phone price with tax included is " + priceAfterTax);
