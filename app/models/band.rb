class Band < ApplicationRecord
  has_many :users
  has_many :appointments, dependent: :destroy
  has_many :rooms, through: :appointments
end
