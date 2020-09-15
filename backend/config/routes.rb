Rails.application.routes.draw do

  namespace :v1 do
    resources :users, only: [:create, :destroy]
    resources :books do
      resources :discussions
    end 
  end
end
