class ChangeCardnumDataTypeInPtcgdeckcardinfos < ActiveRecord::Migration[6.0]
  def change
    change_column :ptcgdeckcardinfos, :cardnum, :integer
  end
end
