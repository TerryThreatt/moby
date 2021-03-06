class Book {
    static allBooks = [];

    constructor({id, title, author = "unknown", genre = "uncategorized", reviews = [] }) {
        this.id = id
        this.title = title
        this.author = author
        this.genre = genre
        this.reviews = reviews

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
            <h3 class="card-title">Title: <br>${this.title}</h3>
            <h5 class="card-content">Author: <br>${this.author}</h5>
            <h5 class="card-content">Genre:  ${this.genre}</h5>

        `
            // insert div
            bookDiv.setAttribute('data.id', `${this.id}`)
            bookDiv.className = 'card col s6'
            books.appendChild(bookDiv)

            // add button
            const button = document.createElement('button')
            button.setAttribute("id", this.id)
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

    }

    renderBookReviews() {

        this.reviews.forEach(review => {

            // create div
            const reviews = document.querySelector('#reviews');
            const bookDiv = document.createElement('div');

            // manipulate div
            bookDiv.innerHTML = `
                <h3 class="card-title">Title: <br><br>${this.title}</h3>
                <br>
                <h5>Review: </h5>
                <br>
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
            button.setAttribute("id", review['id'])
            button.innerText = 'Delete Review'
            button.addEventListener('click', (e) => removeReview(e))
            bookDiv.appendChild(button)
        });

    }

    reviewForm() {
        const form = document.createElement('form')
        form.setAttribute('class', 'addReview')
        form.setAttribute('id', this.id)
        const label = document.createElement('label')
        label.innerText = "Add New Review"

        const textArea = document.createElement('textarea')
        textArea.name = 'reviewBody'
        textArea.value = ''
        textArea.id = 'reviewBody'

        const formButton = document.createElement('input')
        formButton.type = 'submit'
        formButton.value = 'Submit Review'
        formButton.setAttribute('id', this.id)
        formButton.setAttribute('name', 'revSubmitBtn')

        form.append(label)
        form.append(textArea)
        form.append(formButton)

        return form
    }

}