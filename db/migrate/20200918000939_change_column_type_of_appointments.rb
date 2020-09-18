class ChangeColumnTypeOfAppointments < ActiveRecord::Migration[6.0]
  def change
    remove_column :appointments, :booking_start
    remove_column :appointments, :booking_end
  end
end
