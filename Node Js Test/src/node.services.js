const fs = require("fs");
// 1. Save notes to file
const saveNotesToFile = (notes) => {
  const stringifiedNotes = JSON.stringify(notes);
  fs.writeFileSync("./data/notes.json", stringifiedNotes, {
    encoding: "utf-8",
  });
};
// 2. Read notes from file
const readNotesFromFile = () => {
  const rawNotesData = fs.readFileSync("./data/notes.json", {
    encoding: "utf-8",
  });
  return JSON.parse(rawNotesData);
};

module.exports = {
  saveNotesToFile,
  readNotesFromFile,
};
