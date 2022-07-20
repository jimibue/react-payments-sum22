Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    post 'users/:id/update_image', to:'users#update_image'
    post 'users/update_image_auth', to:'users#update_image_auth'
    get 'braintree_token', to:'braintree#token'
    post 'payment', to:'braintree#payment'
  end
end
