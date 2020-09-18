module v1
   class CommentsController < ApplicationController
        def index
            @comments = Comment.all
        end

        def create
            discussion = Book.find(params[:discussion_id])
            @comment = discussion.comments.build(comment_params)

            if @comment.save
                render json: @comment, status: :created
            else
                render json: @comment.errors, status: :unprocessable_entity
            end
        end

        private

        def set_comment
            @comment = Comment.find(params[:id])
        end

        def comment_params
            params.require(:comment).permit(:body, :discussion_id, :book_id, :user_id)
        end

    end
end