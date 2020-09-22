Rails.application.routes.draw do


      resources :sessions, only: [:create, :destroy]
      resources :users do
        resources :books do
          resources :discussions do
            resources :comments
          end
        end
      end
end
