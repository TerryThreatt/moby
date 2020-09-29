class Api::V1::ReviewsController < ApplicationController
    before_action :set_review, only: [:show, :destroy]

        def index
            reviews = Review.all
            render json: @reviews
        end

        def show
            render json: @review
          end

        def create
            book = Book.find(params[:book_id])
            @review = book.reviews.build(review_params)

            if @review.save
                render json: @review, status: :created
            else
                render json: @review.errors, status: :unprocessable_entity
            end
        end


        def destroy
            @review.destroy
        end


        private

        def set_review
            @review = Review.find(params[:id])
        end

        def review_params
            params.require(:review).permit(:book_id, :body)
        end
    end