class Review {
    static allReviews = [];

    constructor(book, review){
        this.id = review.id
        this.book = book.id
        this.body = ""

        Review.allReviews.push(this)
    }


}