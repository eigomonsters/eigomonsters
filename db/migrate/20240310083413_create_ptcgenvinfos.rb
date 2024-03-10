class CreatePtcgenvinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgenvinfos do |t|
      t.string :envid
      t.string :envname
      t.string :startdate
      t.string :enddate

      t.timestamps
    end
  end
end
