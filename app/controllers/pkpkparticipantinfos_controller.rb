class PkpkparticipantinfosController < ApplicationController
  def index
    if params['tournament_id_list'].present?
      # パラメーターを配列に変換
      tournament_id_list = params['tournament_id_list'].is_a?(String) ? params['tournament_id_list'].split(',') : params['tournament_id_list']
  
      # 該当する大会データを取得
      pkpkparticipantinfo = Pkpkparticipantinfo.where(tournament_id: tournament_id_list)
  
      render status: 200, json: { pkpkparticipantinfo: pkpkparticipantinfo }
    else
      render status: 400, json: { error: 'Invalid or missing tournament_id_list parameter' }
    end
  end
end
