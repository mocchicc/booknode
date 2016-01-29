class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :image_url
      t.string :isbn
      t.string :author
      t.integer :depth
      t.integer :x,default:0
      t.integer :y,default:0
      t.integer :width
      t.integer :height
      t.timestamps null: false
    end
  end
end
