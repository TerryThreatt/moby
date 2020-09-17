module v1
   class CommentsController < ApplicationController
        def index
        end

        def create
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