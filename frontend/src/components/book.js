class Book {
    constructor(id, isbn = "N/A", title, author, genre ="N/A") {
        this.id = id
        this.isbn = isbn
        this.title = title
        this.author = author
        this.genre = genre
    }

    static searched = [];

}