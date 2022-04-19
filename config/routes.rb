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
      #get 'typingplay_jap'
      post 'typingplay_play'
      #post 'typingplay_jap'
      get 'about'
      get 'typingplay_before_start'
      post 'typingplay_before_start'
    end
  end
end
