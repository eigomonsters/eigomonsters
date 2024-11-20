class RenameTypeColumnInPkpkcardinfos < ActiveRecord::Migration[6.0]
  def change
    rename_column :pkpkcardinfos, :type, :poketype
  end
end
