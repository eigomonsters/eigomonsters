class CreatePtcgdeckcardinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgdeckcardinfos do |t|
      t.string :deckcode
      t.string :cardname
      t.integer :cardnum

      t.timestamps
    end
  end
end
