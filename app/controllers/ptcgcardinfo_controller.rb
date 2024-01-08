class PtcgcardinfoController < ApplicationController

  def index
    if params['cardId'] != nil && params['cardId'] != 0
      ptcgcardinfo = Ptcgcardinfo.where(cardId: params['cardId'])
      render status: 200, json: { ptcgcardinfo: ptcgcardinfo }
    else
      render status: 500, json: { ptcgcardinfo: ptcgcardinfo }
    end
  end

  def ptcgcardinfo_params
    params.permit(:cardId)
  end

end
