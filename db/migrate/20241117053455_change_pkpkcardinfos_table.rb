class ChangePkpkcardinfosTable < ActiveRecord::Migration[6.0]
  def change
    change_table :pkpkcardinfos do |t|
      change_column :pkpkcardinfos, :hp, :integer, null: false, default: 9999
      change_column :pkpkcardinfos, :evolevel, :string, null: false, default: 'なし'
      change_column :pkpkcardinfos, :type, :string, null: false, default: 'なし'
      change_column :pkpkcardinfos, :retreatcost, :integer, null: false, default: 9999
      change_column :pkpkcardinfos, :rule, :string, null: false, default: 'なし'
      change_column :pkpkcardinfos, :ability, :string, null: false, default: 'なし'
      change_column :pkpkcardinfos, :option, :string, null: false, default: 'なし'
    end
  end
end
