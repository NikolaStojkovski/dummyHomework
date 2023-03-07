const fs = require("fs");

const writeToFile = (fileName, data) => {
  if (!fs.existsSync(fileName)) {
    console.log("New File Created", fileName);
  } else {
    console.log("Data Overwritten Succesfuly ro file", fileName);
  }
  let isObject = true;
  if (data instanceof Array) {
    data.forEach((element) => {
      if (!(element instanceof Object)) isObject = false;
    });
  }
  if (!isObject) return;
  if (typeof data != "object") return;
  fs.writeFileSync(fileName, JSON.stringify(data));
};

const readFile = (fileName) => { 
  if (!fs.existsSync(fileName)) {
    console.log(`File ${fileName} not found`);
    return;
  }
  const fileData = fs.readFileSync(fileName, { encoding: "utf-8" });
  return JSON.parse(fileData);
};

const appendToObject = (fileName, data) => {
  const objectToAppentTo = readFile(fileName);

  if (!objectToAppentTo) return;
  if (data === undefined || data === null) return;
  const objectWithAppendedData = { ...objectToAppentTo, data };
};
module.exports = { writeToFile, readFile, appendToObject };
