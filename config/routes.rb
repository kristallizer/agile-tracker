require_dependency 'constraints/format'
EmberTodo::Application.routes.draw do
  resources :api_keys

  resources :users, except: [:new, :edit, :destroy]
  post 'session' => 'session#create'

  root :to => redirect('/projects')
  get '*tab', :to => 'application#index', constraints: Constraints::Format.new(:html)

  constraints(constraints: Constraints::Format.new(:json)) do
    resources :projects
    resources :tasks
    # end
  end
end
