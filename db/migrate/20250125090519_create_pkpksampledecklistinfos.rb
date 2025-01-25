class CreatePkpksampledecklistinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpksampledecklistinfos do |t|
      t.integer :pattern_ver, null: false
      t.string :pattern_name, null: false
      t.integer :pattern_id, null: false
      t.string :deck_name, null: false
      t.string :deck_image
      t.integer :deck_color, null: false
      t.string :first_card_name
      t.string :first_card_num
      t.string :second_card_name
      t.string :second_card_num
      t.string :third_card_name
      t.string :third_card_num
      t.string :fourth_card_name
      t.string :fourth_card_num
      t.string :fifth_card_name
      t.string :fifth_card_num
      t.integer :deck_order, null: false
      t.integer :editable_flag, null: false
      t.timestamp :timestamp
    end
  end
end
