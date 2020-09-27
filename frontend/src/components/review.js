class Review {
    static allReviews = [];

    constructor(book, review){
        this.id = review.id
        this.book_id = book.id
        this.body = review

        Review.allReviews.push(this)
    }

}