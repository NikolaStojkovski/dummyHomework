const fs = require("fs");
// const path = "./newFile.txt";

// //! Write File
// fs.writeFileSync(path, "Hello from Node.js");

// //! Read File
// const data = fs.readFileSync(path, { encoding: "utf-8" });
// console.log(data);

// //! Append File
// fs.appendFileSync(path, "appended some content");
// const data2 = fs.readFileSync(path, { encoding: "utf-8" });
// console.log(data2);
// fs.unlinkSync(path);
// const data3 = fs.readFileSync(path, { encoding: "utf-8" });
// console.log(data3);

const path = "./someJson.json";
const someObject = {
  name: "Nikola",
  age: 5,
};

fs.writeFileSync(path, JSON.stringify(someObject));
