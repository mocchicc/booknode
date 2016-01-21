class Book < ActiveRecord::Base
  has_many :contents,:dependent => :destroy
  has_many :nodes,:dependent => :destroy
  attr_accessor :text

end
