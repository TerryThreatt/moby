// routes
const BACKEND_URL = 'https://moby-abackend.herokuapp.com/';
const ALLBOOKS_URL = `${BACKEND_URL}/books`;
const ALLREVIEWS_URL = `${BACKEND_URL}/reviews`;

document.addEventListener('DOMContentLoaded', function(e) {
    getBooks(e)
    const bookForm = document.querySelector('.review');
    bookForm.addEventListener("submit", e => bookHandler(e))
    const searchForm = document.querySelector('.searchBooks');
    searchForm.addEventListener("submit", e => searchBooks(e));
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
       const newBook = new Book(book)
       addReview(newBook.id, reviews) // maybe a better way of passing down review body
    })
    .catch(err => alert("Book Failed: Please try again."))

}

function reviewHandler(e) {
    e.preventDefault()
    let bodyInput = document.querySelector('#reviewBody').value
    let bookInput = e.target.id
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
    let id = e.target.id
    fetch(`${ALLREVIEWS_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => {
        location.reload()
    })
    .catch(err => alert("Please try again"))
}

function searchBooks(e) {
    e.preventDefault()
    let searchAuthor = document.getElementById('searchAuthor').value
    // filter value
    const availableBook = Book.allBooks.filter(book => book.author === searchAuthor)[0];

    // delete all other available book
    const availableBooks = document.getElementById("books")
    availableBooks.innerText = ""

    // display searched book
    const bookDiv = document.createElement('div');

    // manipulate div
    bookDiv.innerHTML = `
    <h3 class="card-title">Title: <br>${availableBook.title}</h3>
    <h5 class="card-content">Author: <br>${availableBook.author}</h5>
    <h5 class="card-content">Genre:  ${availableBook.genre}</h5>
`
    // insert div
    bookDiv.setAttribute('data.id', `${availableBook.id}`)
    bookDiv.className = 'card col s6'
    books.appendChild(bookDiv)

    // add button
    const button = document.createElement('button')
    button.setAttribute("id", availableBook.id)
    button.innerText = 'Add Review'
    button.addEventListener('click', (e) => {
        // new review
        const span = document.createElement('span')
        const form = this.reviewForm()
        span.appendChild(form)
        bookDiv.appendChild(span)
        button.remove()

        const reviewForm = document.querySelector('.addReview');
        reviewForm.addEventListener("submit", e => reviewHandler(e))
    })
    bookDiv.appendChild(button)
}
