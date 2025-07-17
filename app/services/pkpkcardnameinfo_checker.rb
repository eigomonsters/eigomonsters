# app/services/pkpkcardnameinfo_checker.rb
class PkpkcardnameinfoChecker
  def self.check(current_suggest_ver)
    max_suggest_ver = Pkpkcardnameinfo.maximum(:suggest_ver)
    if max_suggest_ver == current_suggest_ver
      puts 'No new version'
    else
      pkpkcardnameinfo = Pkpkcardnameinfo.where('suggest_ver > ?', current_suggest_ver)
      puts "New data: #{pkpkcardnameinfo.to_json}"
    end
  end
end
