class PkpkcardnameinfosController < ApplicationController
  def index
    if params['current_suggest_ver'].present?
      
      # パラメーターを取得
      current_suggest_ver = params['current_suggest_ver'].to_i
      # 全レコード中の suggest_ver の最大値を取得
      max_suggest_ver = Pkpkcardnameinfo.maximum(:suggest_ver)
      if max_suggest_ver == current_suggest_ver
        # (2) suggest_ver の最大値と current_suggest_ver が一致する場合
        render status: 200, json: { pkpkcardnameinfo: nil }
      else
        # (3) suggest_ver > current_suggest_ver のレコードを取得
        pkpkcardnameinfo = Pkpkcardnameinfo.where('suggest_ver > ?', current_suggest_ver)
        render status: 200, json: { pkpkcardnameinfo: pkpkcardnameinfo }
      end
    else
      render status: 400, json: { error: 'Invalid or missing current_suggest_ver parameter' }
    end
  end
end
