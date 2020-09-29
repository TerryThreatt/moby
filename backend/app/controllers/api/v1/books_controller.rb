
class Api::V1::BooksController < ApplicationController

  def index
    @books = Book.all

    render json: @books
  end

  def show
    @book = Book.find(params[:id])
    render json: @book
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  private

    def book_params
      params.require(:book).permit(:title, :author, :genre, review: [:body])
    end

end