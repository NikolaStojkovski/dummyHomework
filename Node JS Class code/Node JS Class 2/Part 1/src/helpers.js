const fs = require("fs");
const path = require("path");
const newPath = path.join(__dirname, "data", "new.txt");

const create = (folderName, fileName, data = {}) => {
  const somePath = path.join(__dirname, folderName);
  if (!fs.existsSync(somePath)) {
    fs.mkdirSync(somePath);
    const fileNamePath = path.join(somePath, fileName);
    fs.writeFileSync(fileNamePath, data);
  } else {
    console.log("Directory with that name exists");
  }
};

const read = () => {};

const update = () => {};

const remove = () => {};

module.exports = {
  create,
  read,
  update,
  remove,
};
