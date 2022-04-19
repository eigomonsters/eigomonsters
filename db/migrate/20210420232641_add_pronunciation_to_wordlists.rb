class AddPronunciationToWordlists < ActiveRecord::Migration[6.0]
  def change
    add_column :wordlists, :pronunciation, :string
    add_column :wordlists, :part_of_speech_2, :string
    add_column :wordlists, :jap_trans_2, :string
    add_column :wordlists, :jap_trans_2_yomi, :string
    add_column :wordlists, :part_of_speech_3, :string
    add_column :wordlists, :jap_trans_3, :string
    add_column :wordlists, :jap_trans_3_yomi, :string
    add_column :wordlists, :eng_ex_sentence_1, :string
    add_column :wordlists, :jap_ex_sentence_1, :string
    add_column :wordlists, :eng_ex_sentence_2, :string
    add_column :wordlists, :jap_ex_sentence_2, :string
    add_column :wordlists, :eng_ex_sentence_3, :string
    add_column :wordlists, :jap_ex_sentence_3, :string
    add_column :wordlists, :eng_synonym_1, :string
    add_column :wordlists, :jap_synonym_1, :string
    add_column :wordlists, :eng_synonym_2, :string
    add_column :wordlists, :jap_synonym_2, :string
    add_column :wordlists, :eng_synonym_3, :string
    add_column :wordlists, :jap_synonym_3, :string
    add_column :wordlists, :eng_antonym_1, :string
    add_column :wordlists, :jap_antonym_1, :string
    add_column :wordlists, :eng_antonym_2, :string
    add_column :wordlists, :jap_antonym_2, :string
    add_column :wordlists, :eng_antonym_3, :string
    add_column :wordlists, :jap_antonym_3, :string
    add_column :wordlists, :eng_related_1, :string
    add_column :wordlists, :jap_related_1, :string
    add_column :wordlists, :eng_related_2, :string
    add_column :wordlists, :jap_related_2, :string
    add_column :wordlists, :eng_related_3, :string
    add_column :wordlists, :jap_related_3, :string
  end
end
