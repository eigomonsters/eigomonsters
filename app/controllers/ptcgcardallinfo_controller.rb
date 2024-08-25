class PtcgcardallinfoController < ApplicationController
  def index
    if params['cardid'] != nil && params['cardid'] != 0
      ptcgcardallinfo = Ptcgcardallinfo.where(cardid: params['cardid'])
      render status: 200, json: { ptcgcardallinfo: ptcgcardallinfo }
    else
      render status: 500, json: { ptcgcardallinfo: ptcgcardallinfo }
    end
  end

  def ptcgcardallinfo_params
    params.permit(:cardid)
  end
end
