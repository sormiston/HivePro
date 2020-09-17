class Appointment < ApplicationRecord
  belongs_to :bands
  belongs_to :rooms
end
