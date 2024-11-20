class Pkpkcardinfo < ApplicationRecord
  validates :cardid, presence: true
  validates :cardname, presence: true
  validates :model, presence: true
  validates :pack, presence: true
  validates :url, presence: true
  validates :category, presence: true
  validates :rarity, presence: true
  validates :hp, presence: true
  validates :evolevel, presence: true
  validates :type, presence: true
  validates :retreatcost, presence: true
  validates :rule, presence: true
  validates :ability, presence: true
  validates :option, presence: true
end