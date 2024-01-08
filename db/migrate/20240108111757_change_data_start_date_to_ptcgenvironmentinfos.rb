class ChangeDataStartDateToPtcgenvironmentinfos < ActiveRecord::Migration[6.0]
  def change
    change_column :ptcgenvironmentinfos, :startDate, :string
    change_column :ptcgenvironmentinfos, :endDate, :string
  end
end
