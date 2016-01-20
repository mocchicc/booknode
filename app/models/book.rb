class Book < ActiveRecord::Base
  has_many :contents,:dependent => :destroy
  attr_accessor :text

end
