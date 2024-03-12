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

  def update
    # gameresultidに一致するレコードを検索
    if params['gameresultid'].present?
      game_result = Ptcggameresultinfo.where(gameresultid: params['gameresultid'])
      binding.pry
      if game_result
        # レコードが見つかった場合は削除
        game_result.update(
          userid: params['userid'],
          dueldate: params['dueldate'],
          dueldate: params['dueldate'],
          compecategory: params['compecategory'],
          useddeckcategory: params['useddeckcategory'],
          oponentdeckcategory: params['oponentdeckcategory'],
          environment: params['environment'],
          attackorder: params['attackorder'],
          duelresult: params['duelresult'],
          searchpassword: params['searchpassword'],
          cardname1: params['cardname1'],
          cardname2: params['cardname2'],
          cardname3: params['cardname3'],
          cardname4: params['cardname4'],
          cardname5: params['cardname5'],
          cardname6: params['cardname6'],
          cardname7: params['cardname7'],
          cardname8: params['cardname8'],
          cardname9: params['cardname9'],
          cardname10: params['cardname10'],
          cardname11: params['cardname11'],
          cardname12: params['cardname12'],
          cardname13: params['cardname13'],
          cardname14: params['cardname14'],
          cardname15: params['cardname15'],
          cardname16: params['cardname16'],
          cardname17: params['cardname17'],
          cardname18: params['cardname18'],
          cardname19: params['cardname19'],
          cardname20: params['cardname20'],
          cardname21: params['cardname21'],
          cardname22: params['cardname22'],
          cardname23: params['cardname23'],
          cardname24: params['cardname24'],
          cardname25: params['cardname25'],
          cardname26: params['cardname26'],
          cardname27: params['cardname27'],
          cardname28: params['cardname28'],
          cardname29: params['cardname29'],
          cardname30: params['cardname30'],
          cardname31: params['cardname31'],
          cardname32: params['cardname32'],
          cardname33: params['cardname33'],
          cardname34: params['cardname34'],
          cardname35: params['cardname35'],
          cardname36: params['cardname36'],
          cardname37: params['cardname37'],
          cardname38: params['cardname38'],
          cardname39: params['cardname39'],
          cardname40: params['cardname40'],
          cardname41: params['cardname41'],
          cardname42: params['cardname42'],
          cardname43: params['cardname43'],
          cardname44: params['cardname44'],
          cardname45: params['cardname45'],
          cardname46: params['cardname46'],
          cardname47: params['cardname47'],
          cardname48: params['cardname48'],
          cardname49: params['cardname49'],
          cardname50: params['cardname50'],
          cardname51: params['cardname51'],
          cardname52: params['cardname52'],
          cardname53: params['cardname53'],
          cardname54: params['cardname54'],
          cardname55: params['cardname55'],
          cardname56: params['cardname56'],
          cardname57: params['cardname57'],
          cardname58: params['cardname58'],
          cardname59: params['cardname59'],
          cardname60: params['cardname60']
        )
        render plain: '', status: 200
      else
        render plain: '', status: 200
      end
    else
      render plain: '', status: 400
    end
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
