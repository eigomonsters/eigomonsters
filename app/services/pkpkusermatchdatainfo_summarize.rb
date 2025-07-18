# app/services/pkpkusermatchdatainfo_summarize.rb
require 'nkf'

class PkpkusermatchdatainfoSummarize
  def self.check(threshold_date_str)
    threshold_date = Date.parse(threshold_date_str)

    # Step 1: データ抽出
    records = Pkpkusermatchresultinfo.where(
      '(match_date > ? OR (match_date = ? AND match_time >= ?)) AND match_result != ?',
      threshold_date, threshold_date, '15:00:00', 'draw'
    )

    puts "抽出レコード数: #{records.count}"

    # Step 2: base_convertテーブルの変換辞書を作成
    base_convert_map = PkpkBaseConvert.all.each_with_object({}) do |entry, hash|
      hash[entry.base_name] = entry.converted_name
    end

    # Step 3: deck_category_dictテーブルの完全一致変換用辞書を作成
    category_map = PkpkDeckCategoryDict.all.each_with_object({}) do |entry, hash|
      hash[entry.deck_name_by_user] = entry.official_category
    end

    # Step 5: summary_deck変換条件を準備（カード数が多い順にソート）
    summary_conditions = PkpkSummaryDeckCategory.all.map do |entry|
      {
        cards: [entry.first_card, entry.second_card, entry.third_card, entry.fourth_card, entry.fifth_card].reject(&:blank?),
        summary_deck_name: entry.summary_deck_name
      }
    end

    # Step 4〜5: 加工処理
    work = records.filter_map do |record|
      hour_str = record.match_time.strftime('%H')
      rounded_time = "#{hour_str}:00:00"

      normalized_user_deck_name = self.normalize_deck_name(record.user_deck_name)
      converted_user_deck_name = self.convert_deck_name(normalized_user_deck_name, base_convert_map)
      final_user_deck_name = category_map[converted_user_deck_name]
      next nil if final_user_deck_name.nil?

      normalized_opo_deck_name = self.normalize_deck_name(record.opo_deck_name)
      converted_opo_deck_name = self.convert_deck_name(normalized_opo_deck_name, base_convert_map)
      final_opo_deck_name = category_map[converted_opo_deck_name]
      next nil if final_opo_deck_name.nil?

      # final_user_deck_name を summary_conditions で更新、合致しなければ "その他"
      matched_user = false
      summary_conditions.each do |condition|
        if condition[:cards].all? { |card| final_user_deck_name.include?(card) }
          final_user_deck_name = condition[:summary_deck_name]
          matched_user = true
          break
        end
      end
      final_user_deck_name = "その他" unless matched_user

      # final_opo_deck_name を summary_conditions で更新、合致しなければ "その他"
      matched_opo = false
      summary_conditions.each do |condition|
        if condition[:cards].all? { |card| final_opo_deck_name.include?(card) }
          final_opo_deck_name = condition[:summary_deck_name]
          matched_opo = true
          break
        end
      end
      final_opo_deck_name = "その他" unless matched_opo

      record.attributes.merge(
        'rounded_match_time' => rounded_time,
        'converted_user_deck_name' => converted_user_deck_name,
        'final_user_deck_name' => final_user_deck_name,
        'converted_opo_deck_name' => converted_opo_deck_name,
        'final_opo_deck_name' => final_opo_deck_name
      )
    end

    puts "生きているレコード数: #{work.count}"

    # Step 6: レコードの複製（攻守入れ替え & 結果反転）
    duplicated = work.map do |original|
      {
        **original,
        'final_user_deck_name' => original['final_opo_deck_name'],
        'final_opo_deck_name' => original['final_user_deck_name'],
        'converted_user_deck_name' => original['converted_opo_deck_name'],
        'converted_opo_deck_name' => original['converted_user_deck_name'],
        'user_deck_name' => original['opo_deck_name'],
        'opo_deck_name' => original['user_deck_name'],
        'attack_order' => case original['attack_order']
                          when 'goingFirst' then 'goingSecond'
                          when 'goingSecond' then 'goingFirst'
                          else original['attack_order']
                          end,
        'match_result' => case original['match_result']
                          when 'win' then 'lose'
                          when 'lose' then 'win'
                          else 'draw'
                          end
      }
    end

    # Step 7: 勝率データへ集計 & 洗い替え用データ作成
    all_records = work + duplicated
    grouped = all_records.group_by do |r|
      [r['match_date'], r['rounded_match_time'], r['final_user_deck_name'], r['final_opo_deck_name'], r['attack_order']]
    end

    ranked_summary = grouped.map do |(date, time, used_deck, opo_deck, order), matches|
      win_matches = matches.count { |m| m['match_result'] == 'win' }
      total_matches = matches.size
      win_rate = ((win_matches.to_f / total_matches) * 100).round(1)

      {
        match_date: date,
        match_time: time,
        rate_point: 0,
        used_deck_official_name: used_deck,
        opo_deck_official_name: opo_deck,
        attack_order: order,
        win_matches: win_matches,
        total_matches: total_matches,
        win_rate: win_rate,
        personal_user_data: false
      }
    end

    # puts "ランクマッチ用集計データ:"
    # puts ranked_summary.to_json

    # ✅ ここで洗い替えを実行する
    ActiveRecord::Base.transaction do
      PkpkRankedMatchData.delete_all
      PkpkRankedMatchData.insert_all(ranked_summary)
    end

    ranked_summary
  end

  # --- ヘルパー関数 ---
  def self.normalize_deck_name(name)
    return '' unless name.is_a?(String)
    name = name.downcase
    name = NKF.nkf('-w -W', name) # ひらがな → 全角カタカナ
    name.gsub!(/（.*?）/, ' ')
    name.gsub!(/\(.*?\)/, ' ')
    name.gsub!(/[／\/&?・（）()✖️,'雷闘新旧＆？+＋〜！!、➕']/, '')
    name.gsub!(/単騎/, '')
    name.gsub!(/単/, '')
    name.gsub!(/[0-9０-９]/, ' ')
    name.gsub!(/\s+/, '')
    name
  end

  def self.convert_deck_name(original_name, base_convert_map)
    return '' if original_name.nil?
    converted = original_name.dup

    base_convert_map.sort_by { |base, _| -base.length }.each do |base_name, converted_name|
      # 変換後の文字列をすでに含んでいればスキップ
      next if converted.include?(converted_name)
      converted.gsub!(base_name, converted_name)
    end

    converted
  end
end