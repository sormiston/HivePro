class Room < ApplicationRecord
  has_many :appointments
  has_many :bands, through: :appointments
end
