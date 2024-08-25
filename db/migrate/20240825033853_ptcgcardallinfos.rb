class Ptcgcardallinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgcardallinfos do |t|
      t.string :cardid, null: false
      t.string :cardname, null: false
      t.string :imageurlofficial, null: false
      t.string :supertype, null: false
      t.integer :evolevel, null: false
      t.string :evofrom, null: false
      t.string :rule, null: false
      t.string :ability, null: false
      t.string :color, null: false
      t.integer :hp, null: false
      t.integer :retreats, null: false
      t.integer :option, null: false
      t.timestamps
    end
  end
end
