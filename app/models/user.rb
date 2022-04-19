class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :nickname, presence: true
  validates :family_name_kanji, presence: true
  validates :given_name_kanji, presence: true
  validates :family_name_kana, presence: true
  validates :given_name_kana, presence: true
  validates :gender, presence: true
  validates :birthday, presence: true
end
