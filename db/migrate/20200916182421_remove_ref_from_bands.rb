class RemoveRefFromBands < ActiveRecord::Migration[6.0]
  def change
    remove_reference :bands, :appointments
   
  end
end
