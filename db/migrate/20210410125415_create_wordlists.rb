class CreateWordlists < ActiveRecord::Migration[6.0]
  def change
    create_table :wordlists do |t|
      t.string :eng_word, null: false
      t.string :part_of_speech_1, null: false
      t.string :jap_trans_1, null: false
      t.timestamps
    end
  end
end
