class RemoveUserRefFromAppointment < ActiveRecord::Migration[6.0]
  def change
    remove_reference :appointments, :user, null: false, foreign_key: true
  end
end
