class ChangeColumnsToRooms < ActiveRecord::Migration[6.0]
  def change
    remove_column :rooms, :hourly_rt, :string
    add_column :rooms, :hourly_rt_day, :integer
    add_column :rooms, :hourly_rt_night, :integer
  end
end
