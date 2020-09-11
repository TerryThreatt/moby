class V1::UsersController < ApplicationController

    def create
        @user = User.find_or_create_by(user_params)

        if @user.valid?
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
    end

    private

    def user_params
        params.requre(:user).permit(:username, :email, :password)
    end
end
