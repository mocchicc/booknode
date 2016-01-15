class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :text
      t.integer :order
      t.integer :x
      t.integer :y
      t.integer :width
      t.integer :height
      t.belongs_to :book
      t.timestamps null: false
    end
  end
end
