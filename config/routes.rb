Rails.application.routes.draw do
  get 'welcome/search'

  resources :articles

  root 'welcome#search'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
