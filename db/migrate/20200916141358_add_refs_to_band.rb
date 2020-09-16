class AddRefsToBand < ActiveRecord::Migration[6.0]
  def change
    add_reference :bands, :appointments, null: false, foreign_key: true
  end
end
