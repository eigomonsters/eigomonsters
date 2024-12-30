class PkpktournamentinfosController < ApplicationController
  def index
    if params['tournament_id'] != nil && params['tournament_id'] != 0
      pkpktournamentinfo = Pkpktournamentinfo.where(tournament_id: params['tournament_id'])
      render status: 200, json: { pkpktournamentinfo: pkpktournamentinfo }
    else
      render status: 500, json: { pkpktournamentinfo: pkpktournamentinfo }
    end
  end
end
