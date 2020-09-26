
// routes
const BASE_URL = 'http://localhost:5500/';
const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

// elements
const reviews = document.getElementById('reviews');
const form = document.querySelector('.search');

// load content
document.addEventListener('DOMContentLoaded', function(e) {
    getBooks()
});

function getBooks() {
    fetch(ALLBOOKS_URL)
    .then(response => response.json())
    .then(books => {
        books.forEach(book => console.log(book))
    })
}
