class AddDateAndTimeColsToAppointment < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :booking_hour_start, :datetime
    add_column :appointments, :hours_booked, :integer
  end
end
