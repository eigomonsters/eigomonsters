class CreatePkpkdeckinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkdeckinfos do |t|
      t.string :deckid, null: false
      t.string :cardname1, null: false
      t.string :cardname2, null: false
      t.string :cardname3, null: false
      t.string :cardname4, null: false
      t.string :cardname5, null: false
      t.string :cardname6, null: false
      t.string :cardname7, null: false
      t.string :cardname8, null: false
      t.string :cardname9, null: false
      t.string :cardname10, null: false
      t.string :cardname11, null: false
      t.string :cardname12, null: false
      t.string :cardname13, null: false
      t.string :cardname14, null: false
      t.string :cardname15, null: false
      t.string :cardname16, null: false
      t.string :cardname17, null: false
      t.string :cardname18, null: false
      t.string :cardname19, null: false
      t.string :cardname20, null: false
      t.timestamps
    end
  end
end
