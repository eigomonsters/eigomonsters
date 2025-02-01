class CreatePkpkcardnameinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkcardnameinfos do |t|
      t.integer :suggest_ver, null: false
      t.string :card_name_jp, null: false
      t.string :card_name_en, null: false
      t.timestamps
    end
  end
end
