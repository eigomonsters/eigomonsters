Rails.application.routes.draw do
  get 'eigomonsters/index'
  devise_for :users
  root to: 'eigomonsters#index'
  resources :eigomonsters, except: :show do
    collection do
      get 'eng_wordlist_index'
      get 'search'
      get 'typingplay_index'
      post 'typingplay_index'
      get 'typingplay_play'
      post 'typingplay_play'
      get 'about'
      get 'typingplay_setting'
      post 'typingplay_setting'
      get 'policy'
    end
  end
end
