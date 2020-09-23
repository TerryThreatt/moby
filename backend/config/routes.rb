Rails.application.routes.draw do

  post '/signup', to: 'users#signup'
  post '/login', to: 'users#login'

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :books do
          resources :discussions do
            resources :comments
          end
        end
      end
    end
  end

end
