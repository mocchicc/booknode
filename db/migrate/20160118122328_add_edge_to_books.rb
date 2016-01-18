class AddEdgeToBooks < ActiveRecord::Migration
  def up
    add_column :books,:edge,:integer
  end

  def down
    remove_column :books,:edge
  end
end
