// routes
const BASE_URL = 'http://localhost:5500/';
const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

document.addEventListener('DOMContentLoaded', function(e) {
    getBooks(e)
    const bookForm = document.querySelector('.review');
    bookForm.addEventListener("submit", e => bookHandler(e))
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
    const title = document.querySelector("#bookTitle").value
    const author = document.querySelector("#bookAuthor").value
    const genre = document.querySelector("#bookGenre").value
    const reviews = document.querySelector("#bookReview").value
    addBook(title, author, genre, reviews)
}

function addBook(title, author, genre, reviews) {
    const bookData = {title, author, genre, reviews}
    fetch(`${ALLBOOKS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: bookData.title,
            author: bookData.author,
            genre: bookData.genre,
            reviews: bookData.reviews
        })
    })
    .then(response => response.json())
    .then(book => {
       let newBook = new Book(book)
       addReview(newBook.id, reviews) // maybe a better way of passing down review body
    })
    .catch(err => alert("Book Failed: Please try again."))

}

function reviewHandler(e) {
    e.preventDefault()
    const bodyInput = document.querySelector('#reviewBody').value
    const bookInput = e.target.id
    addReview(bookInput, bodyInput)
}

function addReview(book_id, body) {
    const reviewData = {book_id, body}
    fetch(`${ALLREVIEWS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            book_id: reviewData.book_id,
            body: reviewData.body
        })
    })
    .then(response => response.json())
    .then(review => {
       new Review(review)
       location.reload()
    })
    .catch(err => alert("Review Failed: Please try again."))
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
    .catch(err => alert("Please try again"))
}
