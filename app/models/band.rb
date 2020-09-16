class Band < ApplicationRecord
  # TODO: -- add destroy dependency to line 4
  has_many :users
  has_many :appointments
  has_many :rooms, through: :appointments
end
