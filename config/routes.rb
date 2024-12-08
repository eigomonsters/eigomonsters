Rails.application.routes.draw do
  get 'eigomonsters/index'
  devise_for :users
  root to: 'eigomonsters#index'
  resources :eigomonsters, except: :show do
    collection do
      get 'search'
      post 'searchdeck'
      # get 'about'
      get 'policy'
      post 'tanecheck'
      post 'samecardcheck'
      post 'createdeckcode'
      post 'decklistsort'
      # get 'mobilePolicy'
    end
  end

  # resources :contacts, only: [:new, :create]
  #   get 'contacts', to: 'contacts#new'
  #   get 'contacts/confirm'
  #   post 'contacts/confirm', to: 'contacts#confirm', as: 'confirm'
  #   get 'contacts/back'
  #   post 'contacts/back', to: 'contacts#back', as: 'back'
  #   get 'contacts/done', to: 'contacts#done', as: 'done'
  #   get 'contacts/error', to: 'contacts#error', as: 'error'

  resources :ptcgcardinfo, only: [:index]
  get 'ptcgcardinfo/index'

  resources :ptcgcardallinfo, only: [:index]
  get 'ptcgcardallinfo/index'

  resources :ptcgenvinfo, only: [:index, :count]
  get 'ptcgenvinfo/index'
  get 'ptcgenvinfo/count'

  resources :ptcggameresultinfos, only: [:create, :count, :searchgame]
  get 'ptcggameresultinfos/create'
  get 'ptcggameresultinfos/count'
  get 'ptcggameresultinfos/searchgame'

  resources :ptcgdeckcardinfos, only: [:deckcreate, :deckexistcheck]
  get 'ptcgdeckcardinfos/deckcreate'
  get 'ptcgdeckcardinfos/deckexistcheck'

  resources :ptcgopodeckcategoryinfos, only: [:count, :getinfo]
  get 'ptcgopodeckcategoryinfos/count'
  get 'ptcgopodeckcategoryinfos/getinfo'

end
