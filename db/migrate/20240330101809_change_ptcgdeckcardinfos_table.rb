class ChangePtcgdeckcardinfosTable < ActiveRecord::Migration[6.0]
  def change
    change_table :ptcgdeckcardinfos do |t|
      t.rename :cardname, :cardnameoverone
      t.change :cardnameoverone, :string, limit: 1000
      t.string :cardnameovertwo, limit: 500
      t.string :cardnameoverthree, limit: 300
      t.string :cardnameoverfour, limit: 255
      t.remove :cardnum
    end
  end
end
