class ChangeTypeColumnRooms < ActiveRecord::Migration[6.0]
  def change
    change_column :rooms, :sq_footage, :string
  end
end
