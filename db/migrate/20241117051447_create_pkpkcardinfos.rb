class CreatePkpkcardinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :pkpkcardinfos do |t|
      t.string :cardid, null: false
      t.string :cardname, null: false
      t.string :model, null: false
      t.string :pack, null: false
      t.string :url, null: false
      t.string :category, null: false
      t.integer :rarity, null: false
      t.integer :hp
      t.string :evolevel
      t.string :type
      t.integer :retreatcost
      t.string :rule
      t.string :ability
      t.string :option
      t.timestamp :timestamp, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end
  end
end
