class CreateBands < ActiveRecord::Migration[6.0]
  def change
    create_table :bands do |t|
      t.string :name
      t.integer :num_members
      t.string :font

      t.timestamps
    end
  end
end
