class ChangeTournamentIdToStringInPkpktournamentinfos < ActiveRecord::Migration[6.0]
  def change
    # tournament_id カラムを string 型に変更
    change_column :pkpktournamentinfos, :tournament_id, :string
  end
end
