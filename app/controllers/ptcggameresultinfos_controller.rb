class PtcggameresultinfosController < ApplicationController

  def create
    params_to_create = params.permit(
      :gameresultid, :userid, :dueldate, :compecategory, :deckcode, :useddeckcategory,
      :oponentdeckcategory, :environment, :attackorder, :duelresult, :searchpassword
    )
    Ptcggameresultinfo.create(params_to_create)
    render plain: '', status: 200
  end

  def count
    result_count = Ptcggameresultinfo.count
    render status: 200, json: { result_count: result_count }
  end

  def searchgame
    # カード名があり、カード枚数が0である組み合わせのカード名を含んでいるデッキコードを取得する
    first_condition_card_num = params['firstConditionCardNum'].to_i
    second_condition_card_num = params['secondConditionCardNum'].to_i
    third_condition_card_num = params['thirdConditionCardNum'].to_i

    first_exclude_deckcodes = []
    if params['firstConditionCardName'] != '' && first_condition_card_num == 0
      first_exclude_deckcodes = Ptcgdeckcardinfo.where(cardname: params['firstConditionCardName']).pluck(:deckcode)
    end

    second_exclude_deckcodes = []
    if params['secondConditionCardName'] != '' && second_condition_card_num == 0
      second_exclude_deckcodes = Ptcgdeckcardinfo.where(cardname: params['secondConditionCardName']).pluck(:deckcode)
    end

    third_exclude_deckcodes = []
    if params['thirdConditionCardName'] != '' && third_condition_card_num == 0
      third_exclude_deckcodes = Ptcgdeckcardinfo.where(cardname: params['thirdConditionCardName']).pluck(:deckcode)
    end
    # カード名があり、カード枚数が0である組み合わせのカード名を含んでいるデッキコードを全て取得する
    # このデッキコードは検索条件として含まない
    all_exclude_deckcodes = (first_exclude_deckcodes + second_exclude_deckcodes + third_exclude_deckcodes).uniq

    # カード名があり、カード枚数が0である組み合わせのカード名は無視してデッキコードを取得する
    tempptcggdeckcode = Ptcgdeckcardinfo.select(:deckcode).where(
      "(? != '' AND cardname = ? AND cardnum >= ? AND ? > 0) OR 
       (? != '' AND cardname = ? AND cardnum >= ? AND ? > 0) OR 
       (? != '' AND cardname = ? AND cardnum >= ? AND ? > 0)",
      params['firstConditionCardName'], params['firstConditionCardName'], first_condition_card_num, first_condition_card_num,
      params['secondConditionCardName'], params['secondConditionCardName'], second_condition_card_num, second_condition_card_num,
      params['thirdConditionCardName'], params['thirdConditionCardName'], third_condition_card_num, third_condition_card_num
    )
    count_conditions = 0
    count_conditions += 1 if params['firstConditionCardName'] != '' && first_condition_card_num > 0
    count_conditions += 1 if params['secondConditionCardName'] != '' && second_condition_card_num > 0
    count_conditions += 1 if params['thirdConditionCardName'] != '' && third_condition_card_num > 0

    # カード名があり、カード枚数が0より大きい数である組み合わせの数だけhavingする
    if count_conditions > 0
      all_include_deckcodes = tempptcggdeckcode.group(:deckcode).having("COUNT(*) = ?", count_conditions)
    else
      all_include_deckcodes = nil
    end
    # 検索結果からカード枚数0のデッキコードを削除する
    if all_include_deckcodes.present? && all_exclude_deckcodes.present?
      fix_exclude_deckcodes = all_include_deckcodes.select { |deckcode| all_exclude_deckcodes.include?(deckcode.deckcode) }
      if fix_exclude_deckcodes.present?
        ptcggdeckcode = all_include_deckcodes.map(&:deckcode) - fix_exclude_deckcodes.map(&:deckcode)
      else
        ptcggdeckcode = all_include_deckcodes
      end
    elsif all_include_deckcodes.present?
      ptcggdeckcode = all_include_deckcodes
    end
    ptcggameresultinfo = Ptcggameresultinfo.where(deckcode: ptcggdeckcode)
    render status: 200, json: { ptcggameresultinfo: ptcggameresultinfo }
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
