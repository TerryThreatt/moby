module v1
    class DiscussionsController < ApplicationController
        def index
        end

        def create
        end

        private
        
        def set_discussion
            @discussion = Discussion.find(params[:id])
        end

        def discussion_params
            params.require(:discussion).permit(:title, :body, :book_id, :user_id)
        end
    end
end