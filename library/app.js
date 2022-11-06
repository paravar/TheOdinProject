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
const bookGrid = document.getElementById("bookGrid")
const addBookForm = document.getElementById("addBookForm")

const openAddBookModal = () => {
  addBookModal.classList.add("active")
  overlay.classList.add("active")
}

const closeAddBookModal = () => {
  addBookModal.classList.remove("active")
  overlay.classList.remove("active")
}

const handleKeyboardInput = (e) => {
  if (e.key === "Escape") {
    closeAddBookModal()
  }
}

addBookBtn.onclick = openAddBookModal
overlay.onclick = closeAddBookModal
window.onkeydown = handleKeyboardInput
