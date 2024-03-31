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

    # firstConditionCardNameでデッキコードを検索
    first_include_deckcodes = []
    first_exclude_deckcodes = []
    if params['firstConditionCardName'] != ''
      case first_condition_card_num
      when 0
        first_exclude_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['firstConditionCardName'])}!/ }.map(&:deckcode)
      when 1
        first_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['firstConditionCardName'])}!/ }.map(&:deckcode)
      when 2
        first_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameovertwo =~ /!#{Regexp.escape(params['firstConditionCardName'])}!/ }.map(&:deckcode)
      when 3
        first_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverthree =~ /!#{Regexp.escape(params['firstConditionCardName'])}!/ }.map(&:deckcode)
      when 4
        first_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverfour =~ /!#{Regexp.escape(params['firstConditionCardName'])}!/ }.map(&:deckcode)
      end
    end
    # secondConditionCardNameでデッキコードを検索
    second_include_deckcodes = []
    second_exclude_deckcodes = []
    if params['secondConditionCardName'] != ''
      case second_condition_card_num
      when 0
        second_exclude_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['secondConditionCardName'])}!/ }.map(&:deckcode)
      when 1
        second_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['secondConditionCardName'])}!/ }.map(&:deckcode)
      when 2
        second_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameovertwo =~ /!#{Regexp.escape(params['secondConditionCardName'])}!/ }.map(&:deckcode)
      when 3
        second_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverthree =~ /!#{Regexp.escape(params['secondConditionCardName'])}!/ }.map(&:deckcode)
      when 4
        second_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverfour =~ /!#{Regexp.escape(params['secondConditionCardName'])}!/ }.map(&:deckcode)
      end
    end
    # thirdConditionCardNameでデッキコードを検索
    third_include_deckcodes = []
    third_exclude_deckcodes = []
    if params['thirdConditionCardName'] != ''
      case third_condition_card_num
      when 0
        third_exclude_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['thirdConditionCardName'])}!/ }.map(&:deckcode)
      when 1
        third_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['thirdConditionCardName'])}!/ }.map(&:deckcode)
      when 2
        third_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameovertwo =~ /!#{Regexp.escape(params['thirdConditionCardName'])}!/ }.map(&:deckcode)
      when 3
        third_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverthree =~ /!#{Regexp.escape(params['thirdConditionCardName'])}!/ }.map(&:deckcode)
      when 4
        third_include_deckcodes = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverfour =~ /!#{Regexp.escape(params['thirdConditionCardName'])}!/ }.map(&:deckcode)
      end
    end

    # カード名があり、カード枚数が0である組み合わせのカード名を含んでいるデッキコードを全て取得する
    # このデッキコードは検索条件として含まない
    all_exclude_deckcodes_list = (first_exclude_deckcodes + second_exclude_deckcodes + third_exclude_deckcodes).uniq
    all_include_deckcodes = first_include_deckcodes + second_include_deckcodes + third_include_deckcodes
    # このデッキコードは検索条件として含まない
    count_conditions = 0
    count_conditions += 1 if params['firstConditionCardName'] != '' && first_condition_card_num > 0
    count_conditions += 1 if params['secondConditionCardName'] != '' && second_condition_card_num > 0
    count_conditions += 1 if params['thirdConditionCardName'] != '' && third_condition_card_num > 0


    # カード名があり、カード枚数が0より大きい数である組み合わせの数だけhavingする
    if count_conditions > 0
      count_hash = all_include_deckcodes.tally
      # 指定された回数と一致する文字列を抽出
      all_include_deckcodes_list = count_hash.select { |key, value| value == count_conditions }.keys
      puts all_include_deckcodes_list.inspect
      # all_include_deckcodes_list = all_include_deckcodes.group(:deckcode).having("COUNT(*) = ?", count_conditions)
    else
      all_include_deckcodes_list = nil
    end
    
    # 検索結果からカード枚数0のデッキコードを削除する
    if all_include_deckcodes_list.present? && all_exclude_deckcodes_list.present?
      fix_exclude_deckcodes = all_include_deckcodes_list.select { |deckcode| all_exclude_deckcodes_list.include?(deckcode) }
      if fix_exclude_deckcodes.present?
        ptcggdeckcode = all_include_deckcodes_list - all_exclude_deckcodes_list
      else
        ptcggdeckcode = all_include_deckcodes_list
      end
    elsif all_include_deckcodes_list.present?
      ptcggdeckcode = all_include_deckcodes_list
    end

    # 比較カードの設定がある場合、上記処理で絞り込んだデッキコードを分割する
    if params['adoptCardName'] != '' && params['adoptCardFlag'] != '指定しない'
      # 含むデッキコードを取得
      adopt_include_ptcggdeckcode = Ptcgdeckcardinfo.all.select { |deckcard| deckcard.cardnameoverone =~ /!#{Regexp.escape(params['adoptCardName'])}!/ }.map(&:deckcode)
      # 比較カードを含むデッキコード(ptcggdeckcodeadoptinclude)と含まないデッキコード(ptcggdeckcodeadoptexclude)に分ける
      if ptcggdeckcode.present?
          ptcggdeckcodeadoptinclude = adopt_include_ptcggdeckcode.present? ? ptcggdeckcode.select { |deckcode| adopt_include_ptcggdeckcode.include?(deckcode) } : nil
          ptcggdeckcodeadoptexclude = adopt_include_ptcggdeckcode.present? ? ptcggdeckcode - ptcggdeckcodeadoptinclude : ptcggdeckcode
      else
        ptcggdeckcodeadoptinclude = nil
        ptcggdeckcodeadoptexclude = nil
      end
    else
      ptcggdeckcodeadoptinclude = nil
      ptcggdeckcodeadoptexclude = nil
    end
    
    # 日付の型変換
    if params[:startDuelDate].present? && params[:endDuelDate].present?
      formatted_startDuelDate = Date.strptime(params[:startDuelDate], '%Y/%m/%d').strftime('%Y/%m/%d')
      formatted_endDuelDate = Date.strptime(params[:endDuelDate], '%Y/%m/%d').strftime('%Y/%m/%d')
    end
    # 検索条件を設定
    query = Ptcggameresultinfo.all
    if params['adoptCardFlag'] == '含む'
      query = query.where(deckcode: ptcggdeckcodeadoptinclude)
    elsif params['adoptCardFlag'] == '含まない'
      query = query.where(deckcode: ptcggdeckcodeadoptexclude)
    else
      query = query.where(deckcode: ptcggdeckcode)
    end
    query = query.where(oponentdeckcategory: [params['firstOpoDeck'], params['secondOpoDeck'], params['thirdOpoDeck']])
    query = query.where(environment: params['environment'])
    query = query.where(compecategory: [params['firstCompeCategory'], params['secondCompeCategory'], params['thirdCompeCategory'], params['fourthCompeCategory'], params['fifthCompeCategory']])
    query = query.where("dueldate BETWEEN ? AND ?", formatted_startDuelDate, formatted_endDuelDate) if params[:startDuelDate].present? && params[:endDuelDate].present?
    # クエリを実施
    ptcggameresultinfo = query
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
