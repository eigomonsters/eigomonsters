class PtcgenvinfoController < ApplicationController
  def index
    if params['envid'] != nil && params['envid'] != 0
      ptcgenvinfo = Ptcgenvinfo.where(envid: params['envid'])
      render status: 200, json: { ptcgenvinfo: ptcgenvinfo }
    else
      render status: 500, json: { ptcgenvinfo: ptcgenvinfo }
    end
  end

  def count
    env_count = Ptcgenvinfo.count
    render status: 200, json: { env_count: env_count }
  end

  def ptcgenvinfo_params
    params.permit(:envid)
  end
end
