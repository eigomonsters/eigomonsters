class PkpksampledecklistinfosController < ApplicationController
  def index
    if params['current_pattern_ver'].present?
      
      # パラメーターを取得
      current_pattern_ver = params['current_pattern_ver'].to_i
      # 全レコード中の pattern_ver の最大値を取得
      max_pattern_ver = Pkpksampledecklistinfo.maximum(:pattern_ver)
      if max_pattern_ver == current_pattern_ver
        # (2) pattern_ver の最大値と current_pattern_ver が一致する場合
        render status: 200, json: { pkpksampledecklistinfo: nil }
      else
        # (3) pattern_ver = max_pattern_ver のレコードを取得
        pkpksampledecklistinfo = Pkpksampledecklistinfo.where(pattern_ver: max_pattern_ver)
        render status: 200, json: { pkpksampledecklistinfo: pkpksampledecklistinfo }
      end
    else
      render status: 400, json: { error: 'Invalid or missing current_pattern_ver parameter' }
    end
  end
end
