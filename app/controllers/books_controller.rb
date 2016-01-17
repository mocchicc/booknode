class BooksController < ApplicationController
  include Convert
  def index
    @books = Book.all
  end

  def create
    text = params[:text]
    @book = Book.create(title:"book1",x:500,y:1000)
    convert_md(@book,text)
    redirect_to books_path
  end
end
