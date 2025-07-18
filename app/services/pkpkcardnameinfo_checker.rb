# app/services/pkpkcardnameinfo_checker.rb
class PkpkcardnameinfoChecker
  def self.check(threshold_date_str)
    threshold_date = Date.parse(threshold_date_str)

    # Step 1: データ抽出
    records = Pkpkusermatchresultinfo.where(
      'match_date > ? OR (match_date = ? AND match_time >= ?)',
      threshold_date, threshold_date, '15:00:00'
    )

    puts "抽出レコード数: #{records.count}"

    # Step 2: match_timeの丸め処理（先頭2桁 + ':00:00'）
    work = records.map do |record|
      hour_str = record.match_time.strftime('%H')  # '15:03:00' → '15'
      rounded_time = "#{hour_str}:00:00"

      record.attributes.merge('rounded_match_time' => rounded_time)
    end

    # デバッグ出力
    puts "加工済みデータ:"
    puts work.to_json

    work  # 必要に応じて返す
  end
end
