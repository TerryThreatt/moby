class API::V1::UsersController < ApplicationController

        def signup
            @user = User.new(user_params)

            if @user.save
                render json: @user, status: :created
            else
                render json: @user.errors, status: :unprocessable_entity
            end
        end

        def login
            @user = User.find(email: params[:email])

            if @user & @user.valid_password(params[:password])
                render json: @user, status: :created
            else
                render json: @user.errors, status: :unprocessable_entity
            end
        end

        def logout
            @user = User.find(params[:id])
            @user.destroy
        end

        private

        def user_params
            params.requre(:user).permit(:username, :email, :password)
        end
    end
