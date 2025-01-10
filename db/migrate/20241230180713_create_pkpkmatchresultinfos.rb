class CreatePkpkmatchresultinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkmatchresultinfos, id: false do |t|
      t.string :match_result_id, null: false, primary_key: true
      t.string :tournament_id, null: false
      t.string :win_deck_code, null: false
      t.string :lose_deck_code, null: false
      t.string :win_deck_name, null: false
      t.string :lose_deck_name, null: false
      t.timestamps
    end
  end
end
