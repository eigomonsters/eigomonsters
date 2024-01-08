class PtcgenvironmentinfoController < ApplicationController
  def index
    if params['environmentId'] != nil && params['environmentId'] != 0
      ptcgenvironmentinfo = Ptcgenvironmentinfo.where(environmentId: params['environmentId'])
      render status: 200, json: { ptcgenvironmentinfo: ptcgenvironmentinfo }
    else
      render status: 500, json: { ptcgenvironmentinfo: ptcgenvironmentinfo }
    end
  end

  def count
    environment_count = Ptcgenvironmentinfo.count
    render status: 200, json: { environment_count: environment_count }
  end

  def ptcgenvironmentinfo_params
    params.permit(:environmentId)
  end
end
