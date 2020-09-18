class Room < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :bands, through: :appointments
end
