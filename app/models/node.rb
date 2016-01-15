class Node < ActiveRecord::Base
  belongs_to :parent_content,:class_name => "Cotent"
  belongs_to :child_content,:class_name => "Content"
end
