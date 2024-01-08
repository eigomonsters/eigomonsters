class ChangeDataEnvironmentIdToPtcgenvironmentinfos < ActiveRecord::Migration[6.0]
  def change
    change_column :ptcgenvironmentinfos, :environmentId, :string
  end
end
