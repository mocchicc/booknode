class Content < ActiveRecord::Base
  belongs_to :book

  has_many :nodes,:class_name => "Node",:foreign_key => 'parent_id',:dependent => :destroy
  has_one :node,:class_name => "Node",:foreign_key => 'child_id',:dependent => :destroy
  has_many :children,:through => :nodes,:source => :child
  has_one :parent,:through => :node,:source => :parent

end
