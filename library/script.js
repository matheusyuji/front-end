const myLibrary = [];

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = null;
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  book.index = myLibrary.length;
  myLibrary.push(book);
}

const addBook = document.getElementById("addBook");
const bookDialog = document.getElementById("bookDialog");
const bookForm = document.getElementById("bookForm");
const outputBox = document.querySelector("output");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const cancelBtn = bookDialog.querySelector("#cancel");

addBook.addEventListener("click", () => { 
  bookForm.reset();
  bookDialog.showModal();
});

confirmBtn.addEventListener("click", (event) => {
  if (!bookForm.checkValidity()) {
    bookForm.reportValidity(); 
    return; 
  }

  event.preventDefault();

  const formData = new FormData(bookForm);
  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  console.log(myLibrary);

  bookDialog.close();
});

cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});