Rails.application.routes.draw do

  post '/signup', to: 'user#signup', as: 'signup'
  post '/login', to: 'user#login', as: 'login'
  delete 'logout', to: 'user#logout', as: 'logout'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:signup, :login, :logout] do
        resources :books do
          resources :discussions do
            resources :comments
          end
        end
      end
    end
  end

end
