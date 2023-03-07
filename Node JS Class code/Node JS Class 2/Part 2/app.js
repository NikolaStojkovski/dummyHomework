const { writeToFile, readFile, appendToObject } = require("./src/helpers");
const path = require("path");
const { appendFile } = require("fs");
const someObject = {
  name: "Nikola",
  lastName: "Stojkovski",
};
const fileName = path.join(__dirname, "people.json");
// writeToFile(fileName, someObject);
const fileFromStorage = readFile(fileName);
console.log(fileFromStorage);

appendToObject(fileName, "Strafciger");
console.log(readFile(fileName));
