class CreatePtcgcardinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgcardinfos do |t|
      t.string :cardid, null: false
      t.string :cardname, null: false
      t.string :imageurlofficial, null: false
      t.string :supertype, null: false
      t.integer :evolevel, null: false
      t.timestamps
    end
  end
end
