class ChangeColumnTypeOnAppointments < ActiveRecord::Migration[6.0]
  def change
    change_column :appointments, :booking_start, :string
    change_column :appointments, :booking_end, :string
  end
end
