class DiscussionsController < ApplicationController
        def index
            @discussions = Discussion.all
        end

        def create
            book = Book.find(params[:book_id])
            @discussion = book.discussions.build(discussion_params)

            if @discussion.save
                render json: @discussion, status: :created
            else
                render json: @discussion.errors, status: :unprocessable_entity
            end
        end

        private

        def set_discussion
            @discussion = Discussion.find(params[:id])
        end

        def discussion_params
            params.require(:discussion).permit(:title, :body, :book_id, :user_id)
        end
    end