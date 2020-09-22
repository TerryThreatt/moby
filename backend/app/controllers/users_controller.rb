class UsersController < ApplicationController

    def signup
        @user = User.new(username: params[:username], email: params[:email], password: params[:password])

        if @user.save
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def login
        @user = User.find_by(email: params[:email])

        if @user & @user.authenticate(params[:password])
            render json: @user, status: :created
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end

    def logout
        @user = User.find(params[:id])
        @user.destroy
    end

end
