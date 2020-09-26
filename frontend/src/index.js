// routes
const BASE_URL = 'http://localhost:5500/';
const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

// elements
const form = document.querySelector('.search');

document.addEventListener('DOMContentLoaded', function(e) {
    getBooks()
});

// load books
function getBooks() {
    fetch(ALLBOOKS_URL)
    .then(response => response.json())
    .then(books => {
        books.forEach(book => {
            let newBook = new Book(book)
            newBook.renderBook()
        })
    })
    .catch(err => alert(err))
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
    .catch(err => alert(err.message))
}
