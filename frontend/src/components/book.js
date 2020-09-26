class Book {
    static allBooks = [];

    constructor(id, title, author, genre) {
        this.id = id
        this.title = title
        this.author = author
        this.genre = genre

        Book.allBooks.push(this)
    }



    renderBook() {
        const books = document.querySelector('#books');

        // create elements
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');

        // manipulate elements
        div.setAttribute("data-id", this.id)
        h3.innerHTML = this.title
        h4.innerHTML = this.author
        h5.innerHTML = this.genre

        // insert elements
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(h5)
        books.appendChild(div)
        console.log(div)

    }

}