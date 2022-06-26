class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :sentence_comp_1, null: false
      t.string :eng_word_used_1, null: false
      t.string :eng_word_origin_1, null: false
      t.string :sentence_comp_2, null: false
      t.string :eng_word_used_2, null: false
      t.string :eng_word_origin_2, null: false
      t.string :sentence_comp_3, null: false
      t.string :eng_word_used_3, null: false
      t.string :eng_word_origin_3, null: false
      t.string :sentence_comp_4, null: false
      t.string :eng_word_used_4, null: false
      t.string :eng_word_origin_4, null: false
      t.string :sentence_comp_5, null: false
      t.text :jap_sentence, null: false
      t.text :eng_sentence, null: false

      t.timestamps
    end
  end
end
