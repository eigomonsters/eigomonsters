class CreatePtcgcardinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgcardinfos do |t|
      t.string :cardid, null: false
      t.string :cardname, null: false
      t.string :imageUrlOfficial, null: false
      t.string :supertype, null: false
      t.integer :evolevel, null: false
      t.string :evofrom, null: false
      t.string :rule, null: false
      t.string :abilityname, null: false
      t.string :color, null: false
      t.integer :hp, null: false
      t.integer :retreatscost, null: false
      t.integer :cardoption, null: false
      t.timestamps
    end
  end
end
