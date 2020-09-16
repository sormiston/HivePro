class AddColumnToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column(:rooms, :room_num, :string, null: false )
  end
end
