class ChangeDueldateTypeInPtcggameresultinfos < ActiveRecord::Migration[6.0]
  def change
    change_column :ptcggameresultinfos, :dueldate, :string
  end
end
