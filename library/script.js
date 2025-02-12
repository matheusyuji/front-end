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
const library = document.querySelector("#library");

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
  createBook(title, author, pages, read);
  console.log(myLibrary);

  bookDialog.close();
});

cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});

document.getElementById("library").addEventListener("click", function (event) {
  if (event.target.matches(".btnRemove")) {
      event.target.parentElement.remove();
  }
});

function createBook(title, author, pages, read){
  const divBook = document.createElement("div");
  const divBookTitle = document.createElement("div");
  const divBookAuthor = document.createElement("div");
  const divBookPages = document.createElement("div");
  const btnRead = document.createElement("button");
  const btnRemove = document.createElement("button");

  divBook.classList.add("book");
  divBookTitle.classList.add("book-info");
  divBookAuthor.classList.add("book-info");
  divBookPages.classList.add("book-info");
  btnRead.classList.add("btnRead");
  btnRemove.classList.add("btnRemove");

  divBookTitle.textContent = `Title: ${title}`;
  divBookAuthor.textContent = `Author: ${author}`;
  divBookPages.textContent = `Pages: ${pages}`;
  btnRead.textContent = "Read";
  btnRemove.textContent = "Remove";
  if(read) {
    btnRead.classList.add("bookRead");
  } else {
    btnRead.classList.add("bookUnread");
  }

  divBook.appendChild(divBookTitle);
  divBook.appendChild(divBookAuthor);
  divBook.appendChild(divBookPages);
  divBook.appendChild(btnRead);
  divBook.appendChild(btnRemove);

  library.appendChild(divBook);
}