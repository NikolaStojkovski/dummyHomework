const firstBook = document.querySelector(".btn-first-book");
const secondBook = document.querySelector(".btn-second-book");
const firstContainer = document.querySelector(".book-one-container");
const secondContainer = document.querySelector(".book-two-container");
const bookOne = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  readingStatus: false,
  read: function () {
    if (this.readingStatus === false) {
      firstContainer.innerHTML += `You need to read "The Great Gatsby" by "F. Scott Fitzgerald" `;
    }
  },
};
const bookTwo = {
  title: "Nineteen Eighty-Four",
  author: "George Orwell",
  readingStatus: true,
  read: function () {
    if (this.readingStatus === true) {
      secondContainer.innerHTML += `You have read "Nineteen Eighty-Four" by "George Orwell"`;
    }
  },
};
firstBook.addEventListener("click", function () {
  bookOne.read();
});
secondBook.addEventListener("click", function () {
  bookTwo.read();
});
