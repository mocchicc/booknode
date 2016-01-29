class CreateNodes < ActiveRecord::Migration
  def change
    create_table :nodes do |t|
      
      t.integer :parent_id
      t.integer :child_id
      t.belongs_to :book
      t.timestamps null: false
    end
  end
end
