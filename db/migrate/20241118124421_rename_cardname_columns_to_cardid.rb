class RenameCardnameColumnsToCardid < ActiveRecord::Migration[6.0]
  def change
    rename_column :pkpkdeckinfos, :cardname1, :cardid1
    rename_column :pkpkdeckinfos, :cardname2, :cardid2
    rename_column :pkpkdeckinfos, :cardname3, :cardid3
    rename_column :pkpkdeckinfos, :cardname4, :cardid4
    rename_column :pkpkdeckinfos, :cardname5, :cardid5
    rename_column :pkpkdeckinfos, :cardname6, :cardid6
    rename_column :pkpkdeckinfos, :cardname7, :cardid7
    rename_column :pkpkdeckinfos, :cardname8, :cardid8
    rename_column :pkpkdeckinfos, :cardname9, :cardid9
    rename_column :pkpkdeckinfos, :cardname10, :cardid10
    rename_column :pkpkdeckinfos, :cardname11, :cardid11
    rename_column :pkpkdeckinfos, :cardname12, :cardid12
    rename_column :pkpkdeckinfos, :cardname13, :cardid13
    rename_column :pkpkdeckinfos, :cardname14, :cardid14
    rename_column :pkpkdeckinfos, :cardname15, :cardid15
    rename_column :pkpkdeckinfos, :cardname16, :cardid16
    rename_column :pkpkdeckinfos, :cardname17, :cardid17
    rename_column :pkpkdeckinfos, :cardname18, :cardid18
    rename_column :pkpkdeckinfos, :cardname19, :cardid19
    rename_column :pkpkdeckinfos, :cardname20, :cardid20
  end
end
