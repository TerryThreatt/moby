Rails.application.routes.draw do

  namespace :v1 do
    resources :users, only: [:create, :destroy]
    resources :books do
      resources :discussions do
        resources :comments
      end
    end
  end
end
