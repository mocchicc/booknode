class AddNodeToBook < ActiveRecord::Migration
  def change
      add_reference :nodes,:book
  end
end
