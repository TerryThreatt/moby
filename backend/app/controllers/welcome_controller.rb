class WelcomeController < ApplicationController

    def home
        render 'http://127.0.0.1:5500/frontend/index.html'
    end
end