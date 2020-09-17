class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.integer :sq_footage
      t.string :hourly_rt
      t.text :fixed_equipment
      t.integer :max_cap
      t.string :img_url

      t.timestamps
    end
  end
end
