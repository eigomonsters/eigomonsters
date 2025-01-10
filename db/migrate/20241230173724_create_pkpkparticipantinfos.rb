class CreatePkpkparticipantinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkparticipantinfos, id: false do |t|
      t.string :participant_id, null: false, primary_key: true
      t.string :tournament_id, null: false
      t.string :deck_code, null: false
      t.string :card_name_1, null: false
      t.string :card_name_2, null: false
      t.string :card_name_3, null: false
      t.string :card_name_4, null: false
      t.string :card_name_5, null: false
      t.string :card_name_6, null: false
      t.string :card_name_7, null: false
      t.string :card_name_8, null: false
      t.string :card_name_9, null: false
      t.string :card_name_10, null: false
      t.string :card_name_11, null: false
      t.string :card_name_12, null: false
      t.string :card_name_13, null: false
      t.string :card_name_14, null: false
      t.string :card_name_15, null: false
      t.string :card_name_16, null: false
      t.string :card_name_17, null: false
      t.string :card_name_18, null: false
      t.string :card_name_19, null: false
      t.string :card_name_20, null: false
      t.string :deck_name, null: false
      t.timestamps
    end
  end
end
