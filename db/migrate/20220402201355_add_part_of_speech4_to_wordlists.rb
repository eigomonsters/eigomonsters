class AddPartOfSpeech4ToWordlists < ActiveRecord::Migration[6.0]
  def change
    add_column :wordlists, :part_of_speech_4, :string
    add_column :wordlists, :jap_trans_4, :string
  end
end
