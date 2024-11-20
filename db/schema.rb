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

ActiveRecord::Schema.define(version: 2024_11_18_124421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "subject", null: false
    t.text "message", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pkpkcardinfos", force: :cascade do |t|
    t.string "cardid", null: false
    t.string "cardname", null: false
    t.string "model", null: false
    t.string "pack", null: false
    t.string "url", null: false
    t.string "category", null: false
    t.integer "rarity", null: false
    t.integer "hp", default: 9999, null: false
    t.string "evolevel", default: "なし", null: false
    t.string "poketype", default: "なし", null: false
    t.integer "retreatcost", default: 9999, null: false
    t.string "rule", default: "なし", null: false
    t.string "ability", default: "なし", null: false
    t.string "option", default: "なし", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pkpkdeckinfos", force: :cascade do |t|
    t.string "deckid", null: false
    t.string "cardid1", null: false
    t.string "cardid2", null: false
    t.string "cardid3", null: false
    t.string "cardid4", null: false
    t.string "cardid5", null: false
    t.string "cardid6", null: false
    t.string "cardid7", null: false
    t.string "cardid8", null: false
    t.string "cardid9", null: false
    t.string "cardid10", null: false
    t.string "cardid11", null: false
    t.string "cardid12", null: false
    t.string "cardid13", null: false
    t.string "cardid14", null: false
    t.string "cardid15", null: false
    t.string "cardid16", null: false
    t.string "cardid17", null: false
    t.string "cardid18", null: false
    t.string "cardid19", null: false
    t.string "cardid20", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ptcgcardallinfos", force: :cascade do |t|
    t.string "cardid", null: false
    t.string "cardname", null: false
    t.string "imageurlofficial", null: false
    t.string "supertype", null: false
    t.integer "evolevel", null: false
    t.string "evofrom", null: false
    t.string "rule", null: false
    t.string "ability", null: false
    t.string "color", null: false
    t.integer "hp", null: false
    t.integer "retreats", null: false
    t.integer "option", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ptcgcardinfos", force: :cascade do |t|
    t.string "cardid", null: false
    t.string "cardname", null: false
    t.string "imageurlofficial", null: false
    t.string "supertype", null: false
    t.integer "evolevel", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ptcgdeckcardinfos", id: false, force: :cascade do |t|
    t.string "deckcode", limit: 255, null: false
    t.string "cardnameoverone", limit: 1000, null: false
    t.datetime "timestamp"
    t.string "cardnameovertwo", limit: 500
    t.string "cardnameoverthree", limit: 300
    t.string "cardnameoverfour", limit: 255
  end

  create_table "ptcgenvinfos", force: :cascade do |t|
    t.string "envid"
    t.string "envname"
    t.string "startdate"
    t.string "enddate"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ptcgenvironmentinfos", force: :cascade do |t|
    t.string "environmentId", null: false
    t.string "environmentName", null: false
    t.string "startDate", null: false
    t.string "endDate", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ptcggameresultinfos", id: false, force: :cascade do |t|
    t.string "gameresultid", limit: 255, null: false
    t.string "userid", limit: 255, null: false
    t.string "dueldate", null: false
    t.string "compecategory", limit: 255, null: false
    t.string "deckcode", limit: 255, null: false
    t.string "useddeckcategory", limit: 255, null: false
    t.string "oponentdeckcategory", limit: 255, null: false
    t.string "environment", limit: 255, null: false
    t.string "attackorder", limit: 255, null: false
    t.string "duelresult", limit: 255, null: false
    t.string "searchpassword", limit: 255, null: false
    t.datetime "timestamp"
  end

  create_table "ptcgopodeckcategoryinfos", force: :cascade do |t|
    t.string "opodeckcategoryid"
    t.string "opodeckcategoryname"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stories", force: :cascade do |t|
    t.string "sentence_comp_1", null: false
    t.string "eng_word_used_1", null: false
    t.string "eng_word_origin_1", null: false
    t.string "sentence_comp_2", null: false
    t.string "eng_word_used_2", null: false
    t.string "eng_word_origin_2", null: false
    t.string "sentence_comp_3", null: false
    t.string "eng_word_used_3", null: false
    t.string "eng_word_origin_3", null: false
    t.string "sentence_comp_4", null: false
    t.string "eng_word_used_4", null: false
    t.string "eng_word_origin_4", null: false
    t.string "sentence_comp_5", null: false
    t.text "jap_sentence", null: false
    t.text "eng_sentence", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
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

  create_table "wordlists", force: :cascade do |t|
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
