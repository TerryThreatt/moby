require 'Auth'

class UsersController < ApplicationController

    def signup
        user = User.new(user_params)

        if user.save
            render json: { token: Auth.create_token({ id: user.id, username: user.username, email: user.email }) }, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def login
        user = User.find_by_email(params[:email])

        if user && user.authenticate(params[:password])
            render json: { token: Auth.create_token({ id: user.id, username: user.username, email: user.email }) }, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    private

        def user_params
            params.require(:user).permit(:username, :email, :password)
        end

end
