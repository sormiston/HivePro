class Appointment < ApplicationRecord
  belongs_to :band, class_name: 'Band'
  belongs_to :room, class_name: 'Room'
end
