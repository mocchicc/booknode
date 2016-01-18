class BooksController < ApplicationController
  include Convert
  def index
    @books = Book.all
=begin
    @data = []
    @books.each do |book|
      book_data = {title:book.title,x:book.x,y:book.y,contents:[]}
      book.contents.each do |content|
          book_data.contents << func(content)
      end
    end
=end

  end

  def create
    text = params[:text]
    @book = Book.create(title:"book1",x:500,y:1000)
    convert_md(@book,text)
    set_positons(@book)
    redirect_to books_path
  end
end

=begin
def func(content)
  if content.children.empty?
    return []
  else
    content_data = {text:child.text,order:child.order,children:[]}
    content.children.each do |child|
      content_data.children << {text:child.text,order:child.order,children:func(child)}
    end
    return data
  end
end
=end
