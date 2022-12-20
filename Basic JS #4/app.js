// &Homework #1
console.log("HOMEWORK #1");
function tellStory(wordArr) {
  let result = `My name is ${wordArr[0]} , i feel ${wordArr[1]} and i would like to play the ${wordArr[2]}`;
  return result;
}

console.log(tellStory(["Nikola", "happy", "guitar"]));

// !Homework #2
console.log("HOMEWORK #2");
let numberArr = [2, 5, 6, 3, 9];
let mixArr = [4, "G4", 2, 4, "Nikola"];
function validateNumber(number) {
  if ((Number = isNaN(number))) {
    return `Please enter a valid number`;
  }
}
function sumOfNumbers(array) {
  let sum = 0;
  for (let num of array) {
    if (validateNumber(num)) return `There was an error during the function`;
    sum += num;
  }
  return sum;
}
console.log(sumOfNumbers(numberArr));
console.log(sumOfNumbers(mixArr));

//*Homework #3
console.log("HOMEWORK #3");
let stringArr = [
  "My",
  "name",
  "is",
  "Nikola",
  "and",
  "i",
  "am",
  "a",
  "student",
  "of",
  "G4",
  "group.",
];
console.log(stringArr.join(" "));

//^Homework #4
console.log("HOMEWORK #4");
function evenOrOdd(numOne, numTwo) {
  for (let i = 1; i <= numTwo; i++) {
    if (i % 2 === 0) console.log(`${i} this number is even`);
    else console.log(`${i} this number is odd`);
  }
}
evenOrOdd(1, 20);

//Homework #5
console.log("HOMEWORK #5");
function sumOfMaxAndMin(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let number of arr) {
    if (number > max) {
      max = number;
    } else if (min > number) min = number;
    sum = max + min;
  }
  console.log(`This is the max number: ${max}`);
  console.log(`This is the min number: ${min}`);
  console.log(`This is the sum of max and min number: ${sum}`);
}
console.log(sumOfMaxAndMin([2, 61, 6, 64, 4, 56]));

//!Homework #6
console.log("HOMEWORK #6");
firstNames = ["Nikola", "Marko", "Ivan"];
lastNames = ["Stojkovski", "Ingjikj", "Mihajlovski"];
function fullNames(firstNames, lastNames) {
  let fullNames = [];
  let counter = 1;
  for (let i = 0; i < firstNames.length; i++) {
    fullNames.push(`${counter}. ${firstNames[i]} ${lastNames[i]} `);
    counter++;
  }
  return fullNames;
}
console.log(fullNames(firstNames, lastNames));
