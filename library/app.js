class Book {
  constructor(
    title = "unknown",
    author = "unknown",
    pages = "0",
    isRead = false
  ) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
  }
}

class Library {
  constructor() {
    this.books = []
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title)
  }

  getbook() {}

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title)
  }
}

const library = new Library()

const addBookBtn = document.getElementById("addBookBtn")
const addBookModal = document.getElementById("addBookModal")
const overlay = document.getElementById("overlay")
const booksGrid = document.getElementById("booksGrid")
const addBookForm = document.getElementById("addBookForm")
const errorMessage = document.getElementById("error-msg")

const openAddBookModal = () => {
  addBookModal.classList.add("active")
  overlay.classList.add("active")
}

const closeAddBookModal = () => {
  addBookModal.classList.remove("active")
  overlay.classList.remove("active")
  errorMessage.classList.remove("active")
  addBookForm.reset()
  errorMessage.innerText = ""
}

const handleKeyboardInput = (e) => {
  if (e.key === "Escape") {
    closeAddBookModal()
  }
}

const getBookFromInput = () => {
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const isRead = document.getElementById("is-read").checked
  return new Book(title, author, pages, isRead)
}

const addBook = (e) => {
  e.preventDefault()
  const newBook = getBookFromInput()
  if (library.isInLibrary(newBook)) {
    errorMessage.innerText = "This book already exists in your library!"
    errorMessage.classList.add("active")
    return
  } else {
    library.addBook(newBook)
    saveLocal()
    updateBooksGrid()
  }
  closeAddBookModal()
}

//TODO: Toggle read
const toggleRead = (e) => {}

//TODO: Remove book
const removeBook = (e) => {}

const updateBooksGrid = () => {
  resetBooksGrid()
  for (let book of library.books) {
    createBookCard(book)
  }
}

const resetBooksGrid = () => {
  booksGrid.innerHTML = ""
}

//TODO: create bookCard
const createBookCard = (book) => {
  const bookCard = document.createElement("div")
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const buttonGroup = document.createElement("div")
  const readBtn = document.createElement("button")
  const removeBtn = document.createElement("button")

  bookCard.classList.add("bookCard")
  buttonGroup.classList.add("button-group")
  readBtn.classList.add("btn")
  removeBtn.classList.add("btn")
  readBtn.onclick = toggleRead
  removeBtn.onclick = removeBook

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  pages.textContent = `${book.pages} pages`
  removeBtn.textContent = "Remove"

  if (book.isRead) {
    readBtn.textContent = "Read"
    readBtn.classList.add("btn-light-green")
  } else {
    readBtn.textContent = "Not read"
    readBtn.classList.add("btn-light-red")
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  buttonGroup.appendChild(readBtn)
  buttonGroup.appendChild(removeBtn)
  bookCard.appendChild(buttonGroup)
  booksGrid.appendChild(bookCard)
}

addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAddBookModal
addBookForm.onsubmit = addBook
window.onkeydown = handleKeyboardInput

const saveLocal = () => {
  localStorage.setItem("library", JSON.stringify(library.books))
}

const restoreLocal = () => {
  const books = JSON.parse(localStorage.getItem("library"))
  if (books) {
    library.books = books.map((book) => JSONToBook(book))
  } else {
    library.books = []
  }
}

const JSONToBook = (book) => {
  return new Book(book.title, book.author, book.pages, book.isRead)
}

// TODO: FireBase storage if possible
