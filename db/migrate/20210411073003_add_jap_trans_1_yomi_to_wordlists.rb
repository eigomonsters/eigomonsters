class AddJapTrans1YomiToWordlists < ActiveRecord::Migration[6.0]
  def change
    add_column :wordlists, :jap_trans_1_yomi, :string, null: false
  end
end
