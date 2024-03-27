class CreatePtcgOpodeckcategoryinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgopodeckcategoryinfos do |t|
      t.string :opodeckcategoryid
      t.string :opodeckcategoryname

      t.timestamps
    end
  end
end
