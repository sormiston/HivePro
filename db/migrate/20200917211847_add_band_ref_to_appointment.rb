class AddBandRefToAppointment < ActiveRecord::Migration[6.0]
  def change
    add_reference :appointments, :band, null: false, foreign_key: true
  end
end
