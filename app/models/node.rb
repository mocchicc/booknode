class Node < ActiveRecord::Base
  belongs_to :book
  belongs_to :parent,:class_name => "Content"
  belongs_to :child,:class_name => "Content"
end
