# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_22_234036) do

  create_table "contacts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "subject", null: false
    t.text "message", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "nickname", null: false
    t.string "family_name_kanji", null: false
    t.string "given_name_kanji", null: false
    t.string "family_name_kana", null: false
    t.string "given_name_kana", null: false
    t.integer "gender", null: false
    t.date "birthday", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "wordlists", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "eng_word", null: false
    t.string "part_of_speech_1", null: false
    t.string "jap_trans_1", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jap_trans_1_yomi", null: false
    t.string "pronunciation"
    t.string "part_of_speech_2"
    t.string "jap_trans_2"
    t.string "jap_trans_2_yomi"
    t.string "part_of_speech_3"
    t.string "jap_trans_3"
    t.string "jap_trans_3_yomi"
    t.string "eng_ex_sentence_1"
    t.string "jap_ex_sentence_1"
    t.string "eng_ex_sentence_2"
    t.string "jap_ex_sentence_2"
    t.string "eng_ex_sentence_3"
    t.string "jap_ex_sentence_3"
    t.string "eng_synonym_1"
    t.string "jap_synonym_1"
    t.string "eng_synonym_2"
    t.string "jap_synonym_2"
    t.string "eng_synonym_3"
    t.string "jap_synonym_3"
    t.string "eng_antonym_1"
    t.string "jap_antonym_1"
    t.string "eng_antonym_2"
    t.string "jap_antonym_2"
    t.string "eng_antonym_3"
    t.string "jap_antonym_3"
    t.string "eng_related_1"
    t.string "jap_related_1"
    t.string "eng_related_2"
    t.string "jap_related_2"
    t.string "eng_related_3"
    t.string "jap_related_3"
    t.string "description"
    t.string "movie_url"
    t.string "image_url"
    t.string "part_of_speech_4"
    t.string "jap_trans_4"
  end

end
