// routes
const BASE_URL = 'http://localhost:5500/';
const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

// elements


document.addEventListener('DOMContentLoaded', function(e) {
    getBooks(e)
});

const reviewForm = document.querySelector('.addReview');
    reviewForm.addEventListener("submit", e => reviewHandler(e))

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
    .then(getBooks())
    .catch(err => alert("Please try again"))
}

function addReview(e) {
    e.preventDefault()
    const id = e.target.id
    fetch(`${ALLREVIEWS_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(review => {
       new Review(review)
       getBooks()
    })
    .catch(err => alert("Please try again."))
}

function reviewHandler(e) {
    e.preventDefault()
    const bodyInput = document.querySelector('[name = reviewBody]').value
    const bookInput = document.querySelector('[name =]')
    addReview(bodyInput, bookInput)
}
