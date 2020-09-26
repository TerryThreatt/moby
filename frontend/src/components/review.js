class Review {
    static allReviews = [];

    constructor(id, book_id, body){
        this.id = id
        this.book = book_id
        this.body = body

        Review.allReviews.push(this)
    }


}