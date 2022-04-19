class Wordlist < ApplicationRecord
  validates :eng_word, presence: true
  validates :jap_trans_1, presence: true
  validates :jap_trans_1_yomi, presence: true

  def self.search(search)
    if search != ""
      Wordlist.where(["eng_word LIKE(?) or jap_trans_1 LIKE(?) or jap_trans_1_yomi LIKE(?) or jap_trans_2 LIKE(?) or jap_trans_3 LIKE(?) or jap_trans_4 LIKE(?)", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%", "%#{search}%"])
    else
      Wordlist.all
    end
  end
end
