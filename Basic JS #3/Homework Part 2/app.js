// Dog to Human
function dogYearCalculator(humanYear) {
  let dogYear = humanYear * 7;
  let dogYearString = `Your dog is ${dogYear} year old in dog years`;
  return dogYearString;
}
console.log(dogYearCalculator(3));
// Human to dog
function humanYearCalculator(dogYear) {
  let humanYear = dogYear / 7;
  let humanYearString = `Your dog is ${humanYear} year old in human years `;
  return humanYearString;
}
console.log(humanYearCalculator(10));
