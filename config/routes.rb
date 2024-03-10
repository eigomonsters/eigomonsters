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
      get 'mobilePolicy'
    end
  end

  resources :contacts, only: [:new, :create]
    get 'contacts', to: 'contacts#new'
    get 'contacts/confirm'
    post 'contacts/confirm', to: 'contacts#confirm', as: 'confirm'
    get 'contacts/back'
    post 'contacts/back', to: 'contacts#back', as: 'back'
    get 'contacts/done', to: 'contacts#done', as: 'done'
    get 'contacts/error', to: 'contacts#error', as: 'error'

  resources :illustory, only: [:index, :sec1EngtoJap, :sec1JaptoEng]
    get 'illustory', to: 'illustory#index'
    get 'illustory/sec1EngtoJap'
    post 'illustory/sec1EngtoJap', to: 'illustory#sec1EngtoJap', as: 'sec1EngtoJap'
    get 'illustory/sec1JaptoEng'
    post 'illustory/sec1JaptoEng', to: 'illustory#sec1JaptoEng', as: 'sec1JaptoEng'

  resources :ptcgcardinfo, only: [:index]
  get 'ptcgcardinfo/index'

  resources :ptcgenvinfo, only: [:index, :count]
  get 'ptcgenvinfo/index'
  get 'ptcgenvinfo/count'

  resources :ptcggameresultinfos, only: [:index, :create]
  get 'ptcggameresultinfos/index'
  get 'ptcggameresultinfos/create'

end
