class Band < ApplicationRecord
  # TODO: -- add destroy dependency to line 4
  has_many :users, dependent: :destroy
  has_many :appointments, dependent: :destroy
  has_many :rooms, through: :appointments
end
