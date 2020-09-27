class Review {
    static allReviews = [];

    constructor(review){
        this.id = review.id
        this.book = review.book
        this.body = ""

        Review.allReviews.push(this)
    }

    renderNewReview() {

    }






}