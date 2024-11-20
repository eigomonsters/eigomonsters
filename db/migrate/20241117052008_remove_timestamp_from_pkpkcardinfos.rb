class RemoveTimestampFromPkpkcardinfos < ActiveRecord::Migration[6.0]
  def change
    remove_column :pkpkcardinfos, :timestamp, :datetime
  end
end
