class RemoveApptRefsFromRooms < ActiveRecord::Migration[6.0]
  def change
    remove_reference :rooms, :appointment
  end
end
