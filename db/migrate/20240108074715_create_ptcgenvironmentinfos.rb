class CreatePtcgenvironmentinfos < ActiveRecord::Migration[6.0]
  def change
    create_table :ptcgenvironmentinfos do |t|
      t.integer "environmentId", null: false
      t.string "environmentName", null: false
      t.datetime "startDate", precision: 6, null: false
      t.datetime "endDate", precision: 6, null: false
      t.timestamps
    end
  end
end
