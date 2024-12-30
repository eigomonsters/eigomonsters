class CreatePkpktournamentinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpktournamentinfos do |t|
      t.integer :tournament_id, null: false
      t.string :tournament_name, null: false
      t.string :tournament_date, null: false
      t.timestamps
    end

    # tournament_id をユニークにするインデックスを追加
    add_index :pkpktournamentinfos, :tournament_id, unique: true
  end
end
