class AddApptRefToRooms < ActiveRecord::Migration[6.0]
  def change
    add_reference :rooms, :appointment, null: false, foreign_key: true
  end
end
