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
        const books = document.querySelector('main');

        // create div
        const div = document.createElement('div');

        // manipulate div
        div.innerHTML = `
            <h3 class="card-title">${this.title}</h3>
            <h4 class="card-content">${this.author}</h4>
            <h5 class="card-content">${this.genre}</h5>
        `

        // insert div
        div.setAttribute('data.id', `${this.id}`)
        div.className = 'card'
        books.appendChild(div)

        // render review
        if (this.reviews === 0) {
            let newReview = new Review(this)
            newReview.renderNewReview()
        }
        else {
            div.innerHTML = `
                <ul>
                    <h2>Reviews: </h2>
                    <li>
            `
        }

    }

    renderBookReviews() {


        div.innerHTML = `
                <ul>
                    <h2>Reviews: </h2>
                    <li>
            `
    }



}