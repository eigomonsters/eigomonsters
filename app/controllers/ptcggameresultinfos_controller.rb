class PtcggameresultinfosController < ApplicationController

  def create
    params_to_insert = params.permit(
      :gameresultid, :userid, :dueldate, :compecategory, :useddeckcategory,
      :oponentdeckcategory, :environment, :attackorder, :duelresult,
      :searchpassword, :cardname1, :cardname2, :cardname3, :cardname4,
      :cardname5, :cardname6, :cardname7, :cardname8, :cardname9, :cardname10,
      :cardname11, :cardname12, :cardname13, :cardname14, :cardname15,
      :cardname16, :cardname17, :cardname18, :cardname19, :cardname20,
      :cardname21, :cardname22, :cardname23, :cardname24, :cardname25,
      :cardname26, :cardname27, :cardname28, :cardname29, :cardname30,
      :cardname31, :cardname32, :cardname33, :cardname34, :cardname35,
      :cardname36, :cardname37, :cardname38, :cardname39, :cardname40,
      :cardname41, :cardname42, :cardname43, :cardname44, :cardname45,
      :cardname46, :cardname47, :cardname48, :cardname49, :cardname50,
      :cardname51, :cardname52, :cardname53, :cardname54, :cardname55,
      :cardname56, :cardname57, :cardname58, :cardname59, :cardname60
    )
    Ptcggameresultinfo.create(params_to_insert)
    render plain: '', status: 200
  end

  def delete
    # すでに対戦結果が存在する場合削除
    gameresultid = params[:gameresultid]
    # gameresultidに一致するレコードを検索
    game_result = Ptcggameresultinfo.find_by(gameresultid: gameresultid)
    if game_result
      # レコードが見つかった場合は削除
      game_result.destroy
    end
    render plain: '', status: 200
  end

  def index
    if params['gameresultid'] != nil && params['gameresultid'] != 0
      ptcggameresultinfo = Ptcggameresultinfo.where(gameresultid: params['gameresultid'])
      render status: 200, json: { ptcggameresultinfo: ptcggameresultinfo }
    else
      render status: 500, json: { ptcggameresultinfo: ptcggameresultinfo }
    end
  end

  def ptcggameresultinfo_params
    params.permit(:gameresultid)
  end

end
