module Convert
  extend ActiveSupport::Concern
  def convert_md(book,text)
   depths = []
   current_depth = 0
   current_content = nil
   order = 0
   chapter = 0
   data = text.split("\n").select{|t|t != "\r"}

   data.each do |line|
     #行頭のスペースをカウント
    depth =  line.match(/^\s*-/).to_s.size
    new_content = Content.new({text:line,depth:depth,book_id:book.id})
    if(depth == 1 )
      order +=1
#      chapter +=1
      new_content.order = order
#      new_content.chapter = chapter
      content = create_chapter(book,new_content)
      current_content = content
    elsif(current_depth < depth)
      #階層が下がる
      order = 1
      new_content.order = order
      content =  add_content(book,current_content,new_content)
      current_content = content
    elsif(current_depth > depth)
      #階層が上がる
      #２段以上
      parent_content = current_content.parent.parent if current_depth - depth >= 2
      #１段まで
      parent_content = current_content.parent        if current_depth - depth == 1
      order = parent_content.order + 1
      new_content.order = order
      content =  add_content(book,parent_content.parent,new_content)
      current_content = content
    elsif(current_depth == depth)
      #階層はそのまま
      order +=1
      new_content.order = order
      content = add_content(book,current_content.parent,new_content)
      current_content = content
    end
    current_depth = depth
    depths << depth
  end

  max_depth = depths.max

  book.depth = max_depth
#  book.edge = depths.size
  book.save
  end

  def create_chapter(book,chapter)
    chapter.book_id = book.id
    chapter.save
    return chapter
  end

  def add_content(book,content,child)
    child.save
    node = Node.create({parent_id:content.id,child_id:child.id,book_id:book.id})
    return child
  end
end
