class Review {
    static reviews = [];

    constructor(id, book_id, body){
        this.id = id
        this.book = book_id
        this.body = body

        reviews.push(this)
    }


}