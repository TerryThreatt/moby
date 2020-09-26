class Book {
    static allBooks = [];

    constructor(book) {
        this.id = book.id
        this.title = book.title
        this.author = book.author
        this.genre = book.genre

        Book.allBooks.push(this)
    }



    renderBook() {
        const books = document.querySelector('main');

        // create div
        const div = document.createElement('div');

        // manipulate div
        div.innerHTML = `
            <h3 class="card-content">${this.title}</h3>
            <h4 class="card-content">${this.author}</h4>
            <h5 class="card-content">${this.genre}</h5>
        `

        // insert div
        div.setAttribute('data.id', `${this.id}`)
        div.className = 'card'
        books.appendChild(div)

    }

}