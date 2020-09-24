Rails.application.routes.draw do
  get '/discussions', to: 'discussions#public', as: 'public_discussions'
  get '/discussions/:discussion_id/comments', to: 'discussions#index', as: 'public_comments'

  namespace :api do
    namespace :v1 do
      resources :books
      resources :reviews
    end
  end

end
