module Convert
  extend ActiveSupport::Concern
  def convert_md(book,text)
   depths = []
   current_depth = 0
   current_content = nil
   order = 0
   data = text.split("\n").select{|t|t != "\r"}

   data.each do |line|
     #行頭のスペースをカウント
    depth =  line.match(/^\s*-/).to_s.size
    if(depth == 0 )
      order +=1
      chapter = create_chapter(book,line,order)
      current_content = chapter
    elsif(current_depth < depth)
      #階層が下がる
      order = 1
      content =  add_content(line,current_content,order)
      current_content = content
    elsif(current_depth > depth)
      #階層が上がる
      parent_content = current_content.parent.parent if current_depth - depth > 1
      parent_content = current_content.parent        unless current_depth - depth > 1

      order = parent_content.order + 1
      content =  add_content(line,parent_content.parent,order)
      current_content = content
    elsif(current_depth == depth)
      #階層はそのまま
      order +=1
      content = add_content(line,current_content.parent,order)
      current_content = content
    end
    current_depth = depth
    depths << depth
  end

  max_depth = depths.max

  book.depth = max_depth
  book.edge = depths.select{|d|d == max_depth}.size
  book.save
  end

  def create_chapter(book,line,order)
    chapter = Content.create({text:line,order:order,book_id:book.id})
    return chapter
  end

  def add_content(line,content,order)
    child = Content.create({text:line,order:order})
    node = Node.create({parent_id:content.id,child_id:child.id})
    return child
  end
end
