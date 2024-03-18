class PtcggameresultinfosController < ApplicationController

  def create
    params_to_create = params.permit(
      :gameresultid, :userid, :dueldate, :compecategory, :deckcode, :useddeckcategory,
      :oponentdeckcategory, :environment, :attackorder, :duelresult, :searchpassword
    )
    Ptcggameresultinfo.create(params_to_create)
    render plain: '', status: 200
  end

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

  def index
    if params['gameresultid'] != nil && params['gameresultid'] != 0
      ptcggameresultinfo = Ptcggameresultinfo.where(gameresultid: params['gameresultid'])
      render status: 200, json: { ptcggameresultinfo: ptcggameresultinfo }
    else
      render status: 500, json: { ptcggameresultinfo: ptcggameresultinfo }
    end
  end

  def ptcggameresultinfo_params
    params.permit(:gameresultid)
  end

end
