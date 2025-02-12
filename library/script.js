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
  createBook(title, author, pages, read, myLibrary.length - 1);
  console.log(myLibrary);

  bookDialog.close();
});

cancelBtn.addEventListener("click", () => {
  bookDialog.close();
});

document.getElementById("library").addEventListener("click", function (event) {
  const bookDiv = event.target.closest(".book");
  if (!bookDiv) return;

  const index = bookDiv.getAttribute("data-index");
  if (index === null) return;

  if (event.target.matches(".btnRead")) {
    const book = myLibrary[index];
    book.read = !book.read; 

    event.target.classList.toggle("bookRead", book.read);
    event.target.classList.toggle("bookUnread", !book.read);
    event.target.textContent = book.read ? "Read" : "Read";
  }

  if (event.target.matches(".btnRemove")) {
    myLibrary.splice(index, 1); 
    bookDiv.remove();
    updateLibraryIndexes(); 
  }
});

function createBook(title, author, pages, read, index){
  const divBook = document.createElement("div");
  const divBookTitle = document.createElement("div");
  const divBookAuthor = document.createElement("div");
  const divBookPages = document.createElement("div");
  const btnRead = document.createElement("button");
  const btnRemove = document.createElement("button");

  divBook.classList.add("book");
  divBook.setAttribute("data-index", index); 

  divBookTitle.classList.add("book-info");
  divBookAuthor.classList.add("book-info");
  divBookPages.classList.add("book-info");
  btnRead.classList.add("btnRead");
  btnRemove.classList.add("btnRemove");

  divBookTitle.textContent = `Title: ${title}`;
  divBookAuthor.textContent = `Author: ${author}`;
  divBookPages.textContent = `Pages: ${pages}`;
  btnRead.textContent = read ? "Read" : "Read";
  btnRemove.textContent = "Remove";

  btnRead.classList.add(read ? "bookRead" : "bookUnread");

  divBook.appendChild(divBookTitle);
  divBook.appendChild(divBookAuthor);
  divBook.appendChild(divBookPages);
  divBook.appendChild(btnRead);
  divBook.appendChild(btnRemove);

  library.appendChild(divBook);
}

function updateLibraryIndexes() {
  document.querySelectorAll(".book").forEach((bookDiv, newIndex) => {
    bookDiv.setAttribute("data-index", newIndex);
    myLibrary[newIndex].index = newIndex;
  });
}

bookForm.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    confirmBtn.click();
  }
});