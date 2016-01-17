class Book < ActiveRecord::Base
  has_many :contents
  
end
