
    class SessionsController < ApplicationController

        def create
            @user = User.find(email: params[:email])

            if @user & @user.valid_password(params[:password])
                render json: @user, status: :created
            else
                render json: @user.errors, status: :unprocessable_entity
            end
        end

        def destroy
            @user = User.find(params[:id])
            @user.destroy
        end
    end