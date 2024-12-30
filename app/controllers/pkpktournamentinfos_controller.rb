class PkpktournamentinfosController < ApplicationController
  def index
    if params['tournament_id'] != nil && params['tournament_id'] != 0
      # 今日の日付を取得
      today = Date.today
      # 1ヶ月前の日付を取得
      one_month_ago = today - 1.month
      # データを取得 (tournament_date が 1ヶ月前から今日の範囲内)
      pkpktournamentinfo = Pkpktournamentinfo.where(tournament_date: one_month_ago..today)
      render status: 200, json: { pkpktournamentinfo: pkpktournamentinfo }
    else
      render status: 500, json: { pkpktournamentinfo: pkpktournamentinfo }
    end
  end
end
