Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/bands/names', to: 'bands#band_names'
  get '/appointments/filter/:dt/:dur', to: 'appointments#index'
  resources :rooms
  resources :appointments
  resources :users
  resources :bands
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
