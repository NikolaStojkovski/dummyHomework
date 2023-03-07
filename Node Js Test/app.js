const { v4: uuidv4 } = require("uuid");
const { saveNotesToFile, readNotesFromFile } = require("./src/node.services");
const firstName = "Nikola";
const lastName = "Stojkvski";
console.log(`${firstName} ${lastName}`);
class Note {
  constructor(author, text) {
    this.id = uuidv4();
    this.author = author;
    this.text = text;
  }
}
const newNotes = [
  new Note("Martin", "Css is fun 8888"),
  new Note("Darko", "Css is fun"),
  new Note("Zarko", "Css is fun"),
];
const oldNotes = readNotesFromFile();
const notes = [...oldNotes, ...newNotes];
saveNotesToFile(notes);
const printNote = () => {
  const printingNotes = readNotesFromFile();
  printingNotes.forEach((note) => {
    console.log(`Author: ${note.author} Text:${note.text}`);
  });
};
printNote();
