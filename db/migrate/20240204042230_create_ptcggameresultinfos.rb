class CreatePtcggameresultinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcggameresultinfos do |t|
      t.string :gameresultid, null: false
      t.string :userid, null: false
      t.date :dueldate, null: false
      t.string :compecategory, null: false
      t.string :deckcode, null: false
      t.string :useddeckcategory, null: false
      t.string :oponentdeckcategory, null: false
      t.string :environment, null: false
      t.string :attackorder, null: false
      t.string :duelresult, null: false
      t.string :searchpassword, null: false
      t.timestamps
    end
  end
end
