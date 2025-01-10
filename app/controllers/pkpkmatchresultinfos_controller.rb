class PkpkmatchresultinfosController < ApplicationController
  def index
    if params['tournament_id_list'].present?
      # パラメーターを配列に変換
      tournament_id_list = params['tournament_id_list'].is_a?(String) ? params['tournament_id_list'].split(',') : params['tournament_id_list']
  
      # 大会データに該当する
      pkpkmatchresultinfo = Pkpkmatchresultinfo.where(tournament_id: tournament_id_list)

      render status: 200, json: { pkpkmatchresultinfo: pkpkmatchresultinfo }
    else
      render status: 500, json: { pkpkmatchresultinfo: pkpkmatchresultinfo }
    end
  end
end
