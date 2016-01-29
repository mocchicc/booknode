class CreateContents < ActiveRecord::Migration
  def change
    create_table :contents do |t|
      t.string :text
      t.integer :order
      t.integer :x,default:0
      t.integer :y,default:0
      t.integer :width
      t.integer :height
      t.integer :depth      
      t.belongs_to :book
      t.timestamps null: false
    end
  end
end
