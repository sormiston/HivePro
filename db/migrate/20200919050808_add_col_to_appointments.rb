class AddColToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column(:appointments, :booking_hour_end, :datetime, null: false )
  end
end
