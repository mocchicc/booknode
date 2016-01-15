=begin
#recieve text data
#book
# content
#   content

#最大階層
def convert_md(text)
book = Book.new
book.contents
depths = []
current_depth = 0
array = []
current_array = nil
text.readlines.each do |line|
  depth =  line.match(/^[\s]++/).to_s.size
  if(depth == 0 )
    content = create_chapter(line)
    book.contents <<
    array << ary
  elsif(current_depth > depth)
    #階層が下がる
    add_child(line)
    current_array.push()
    current_ary = ary
  elsif(current_depth < depth)
    #階層が上がる
    current_ary = array[]
  elsif(current_depth == depth)
    #階層はそのまま
    add_menmber(line)
  end
  current_depth = depth
  current_array = ary
  depths << depth
end
max_depth = depth.max
end

def create_chapter(line)

end
=end
