class Appointment < ApplicationRecord
  belongs_to :user_id
  belongs_to :room_id
end
