Rails.application.routes.draw do

  namespace :v1 do
    resources :users, only: [:create, :destroy]

    resources :books
  end
end
