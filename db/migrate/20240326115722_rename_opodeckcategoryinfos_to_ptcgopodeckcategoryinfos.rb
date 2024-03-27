class RenameOpodeckcategoryinfosToPtcgopodeckcategoryinfos < ActiveRecord::Migration[6.0]
  def change
    rename_table :opodeckcategoryinfos, :ptcgopodeckcategoryinfos
  end
end
