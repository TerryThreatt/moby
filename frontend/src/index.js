// routes
const BASE_URL = 'http://localhost:5500/';
const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

document.addEventListener('DOMContentLoaded', function(e) {
    getBooks(e)
});


// load books
function getBooks(e) {
    e.preventDefault()
    fetch(ALLBOOKS_URL)
    .then(response => response.json())
    .then(books => {
        if(books.message) {
            alert(books.message)
        } else
        books.forEach(book => {
            let newBook = new Book(book)
            newBook.renderBook()
        })
    })
    .catch(err => alert(err.message))
}

function bookHandler(e) {
    e.preventDefault()
    const title = document.querySelector("#bookTitle")
    const author = document.querySelector("#bookAuthor")
    const genre = document.querySelector("#bookGenre")
    const review = document.querySelector("#bookReview")
    addBook(title, author, genre, review)
}

function addBook(title, author, genre, review) {
    const bookData = {title, author, genre, review}
    fetch(`${ALLBOOKS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bookData)
    })
    .then(response => response.json())
    .then(book => {
       new Book(book)
       addReview(book, review)
    })
    .catch(err => alert("Please try again."))

}

function reviewHandler(e) {
    e.preventDefault()
    const bodyInput = document.querySelector('#reviewBody').value
    const bookInput = e.target.id
    addReview(bookInput, bodyInput)
}

function addReview(book_id, review) {
    const reviewData = {book_id, review}
    fetch(`${ALLREVIEWS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(reviewData)
    })
    .then(response => response.json())
    .then(review => {
       new Review(review)
       location.reload()
    })
    .catch(err => alert("Please try again."))
}

function removeReview(e) {
    e.preventDefault()
    const id = e.target.id
    fetch(`${ALLREVIEWS_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(location.reload())
    .catch(err => alert("Please try again"))
}
