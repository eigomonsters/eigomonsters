class PtcgdeckcardinfosController < ApplicationController
  def deckcreate
    deckcardinfo = Ptcgdeckcardinfo.find_by(deckcode: params['deckcode'])
    if deckcardinfo
      render plain: '', status: 200
    else
      params_to_deck = params.permit(
        :deckcode, :cardnameoverone, :cardnameovertwo, :cardnameoverthree, :cardnameoverfour
      )
      Ptcgdeckcardinfo.create(params_to_deck)
      render plain: '', status: 200
    end
  end

  def deckexistcheck
    deckcardinfo = Ptcgdeckcardinfo.find_by(deckcode: params['deckcode'])
    if deckcardinfo
      render plain: '', status: 200
    else
      render plain: '', status: 404
    end
  end

end
