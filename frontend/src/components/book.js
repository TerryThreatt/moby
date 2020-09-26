class Book {
    static allBooks = [];

    constructor(book) {
        this.id = book.id
        this.title = book.title
        this.author = book.author
        this.genre = book.genre
        this.reviews = book.reviews

        Book.allBooks.push(this)
    }



    renderBook() {
        const books = document.querySelector('#books');


        // create div
        const bookDiv = document.createElement('div');

        // manipulate div
        bookDiv.innerHTML = `
            <h3 class="card-title">${this.title}</h3>
            <h5 class="card-content">${this.author}</h5>
            <h5 class="card-content">${this.genre}</h5>
        `


        // render review
        if (this.reviews != 0) {
            this.renderBookReviews()
        }
        else {
            let newReview = new Review(this)
            newReview.renderNewReview()
        }

        // insert div
        bookDiv.setAttribute('data.id', `${this.id}`)
        bookDiv.className = 'card'
        books.appendChild(bookDiv)

    }

    renderBookReviews() {

        this.reviews.forEach(review => {

            // create div
            const reviews = document.querySelector('main');
            const bookDiv = document.createElement('div');

            // manipulate div
            bookDiv.innerHTML = `
                <h3 class="card-title">${this.title}</h3>
                <h5>Reviews: </h5>
                <ul>
                    <li class="card-content">${review['body']}</li>
                </ul>
            `

            // insert div
            bookDiv.setAttribute('data.id', `${this.id}`)
            bookDiv.className = 'card'
            reviews.appendChild(bookDiv)
        });

    }



}