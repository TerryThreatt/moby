class Book {
    static searched = [];

    constructor(id, title, author, genre ="N/A") {
        this.id = id
        this.title = title
        this.author = author
        this.genre = genre

        searched.push(this)
    }



}