class Content < ActiveRecord::Base
  has_one :nodes_of_parent,:class_name => "Node",:foreign_key => 'parent_id',:dependent => :destroy
  has_many :nodes_of_child,:class_name => "Node",:foreign_key => 'child_id',:dependent => :destroy
  has_one :parent,:through => :nodes_of_parent,:source => "parent_id"
  has_many :children,:through => :nodes_of_child,:source => "child_id"
end
