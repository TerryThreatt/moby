# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User
book1 = Book.create(title: 'Moby Dick', author: 'Heman Melville' , genre: 'classic' )
book2 = Book.create(title: 'Hamlet', author: 'William Shakespeare' , genre: 'classic')
book3 = Book.create(title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'classic')
book4 = Book.create(title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' , genre: 'classic' )
book5 = Book.create(title: 'Great Expectations', author: 'Charles Dickens' , genre: 'classic')
