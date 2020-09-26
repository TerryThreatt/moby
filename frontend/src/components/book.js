class Book {
    static allBooks = [];

    constructor(book) {
        this.id = book.id
        this.title = book.title
        this.author = book.author
        this.genre = book.genre || "n/a"
        this.reviews = book.reviews

        Book.allBooks.push(this)
    }



    renderBook() {
        const books = document.querySelector('#books');

        // create div
        const bookDiv = document.createElement('div');

        // render review
        if (this.reviews != 0) {
            this.renderBookReviews()
        }
        else {
            // manipulate div
            bookDiv.innerHTML = `
            <h3 class="card-title">${this.title}</h3>
            <h5 class="card-content">${this.author}</h5>
            <h5 class="card-content">${this.genre}</h5>
        `
            // insert div
            bookDiv.setAttribute('data.id', `${this.id}`)
            bookDiv.className = 'card'
            books.appendChild(bookDiv)

            // new review
            let newReview = new Review(this)
            newReview.renderNewReview()
        }

    }

    renderBookReviews() {

        this.reviews.forEach(review => {

            // create div
            const reviews = document.querySelector('#reviews');
            const bookDiv = document.createElement('div');

            // manipulate div
            bookDiv.innerHTML = `
                <h3 class="card-title">${this.title}</h3>
                <h5>Review: </h5>
                <ul>
                    <li class="card-content" data.review.id="${review['id']}">${review['body']}</li>
                </ul>
            `

            // insert div
            bookDiv.setAttribute('data.id', `${this.id}`)
            bookDiv.className = 'card'
            reviews.appendChild(bookDiv)

            // remove button
            const button = document.createElement('button')
            button.setAttribute("data.review.id", review['id'])
            button.innerText = 'Delete Review'
            button.addEventListener('click', (e) => Review.removeReview(e))
            bookDiv.appendChild(button)
            console.log(reviews)
        });

    }



}