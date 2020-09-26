class Review {
    static allReviews = [];

    constructor(book){
        this.id = review.id
        this.book = book
        this.body = ""

        Review.allReviews.push(this)
    }

    renderNewReview() {

        // create div
        const div = document.createElement('div');

        // manipulate div
        div.innerHTML = `
            <h3 class = "card-title">${this.book.title}</h3>
            <textarea class = "card-content">${this.body}</textarea>
        `

        // insert div
        div.setAttribute('data.id', `${this.book.id}`)
        console.log(div)
        // div.className = 'card-action'
        // books.appendChild(div)
    }




}