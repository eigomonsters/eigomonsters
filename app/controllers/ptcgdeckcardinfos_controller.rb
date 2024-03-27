class PtcgdeckcardinfosController < ApplicationController
  def deckcreate
    params_to_deck = params.permit(
      :deckcode, :cardname, :cardnum
    )
    Ptcgdeckcardinfo.create(params_to_deck)
    render plain: '', status: 200
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
