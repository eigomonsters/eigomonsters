class PtcgcardinfoController < ApplicationController

  def index
    if params['cardid'] != nil && params['cardid'] != 0
      ptcgcardinfo = Ptcgcardinfo.where(cardid: params['cardid'])
      render status: 200, json: { ptcgcardinfo: ptcgcardinfo }
    else
      render status: 500, json: { ptcgcardinfo: ptcgcardinfo }
    end
  end

  def ptcgcardinfo_params
    params.permit(:cardid)
  end

end
