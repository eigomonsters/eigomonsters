class CreatePkpkusermatchresultinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkusermatchresultinfos, id: false do |t|
      t.string :match_id, null: false
      t.string :user_id, null: false
      t.date :match_date, null: false
      t.time :match_time, null: false
      t.integer :rate_point, null: false
      t.string :competition_type, null: false
      t.string :competition_name, null: false
      t.string :user_deck_name, null: false
      t.string :opo_deck_name, null: false
      t.string :attack_order, null: false
      t.string :match_result, null: false
      t.string :password, null: false, default: "All"
      t.boolean :public_flag, default: false
      t.boolean :delete_flag, default: false
      t.timestamp :timestamp
    end
  end
end
