class ChangeTournamentDateToDateInPkpktournamentinfos < ActiveRecord::Migration[6.0]
  def change
    # 既存のカラムを削除
    remove_column :pkpktournamentinfos, :tournament_date, :string

    # 新しいカラムを追加
    add_column :pkpktournamentinfos, :tournament_date, :date
  end
end
