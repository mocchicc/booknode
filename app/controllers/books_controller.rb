class BooksController < ApplicationController
  include Convert
  before_action :set_book, only:[:edit,:update,:destroy]

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end

  def new
    @book = Book.new
  end

  def edit
  end

  def create
    text = book_params[:text]
    @book = Book.create(book_params)
    convert_md(@book,text)
    #set_positons(@book)
    redirect_to books_path
  end

  def update
    if @book.update(book_params)
      redirect_to @book
    else
      render :edit
    end
  end

  def destroy
    @book.destroy
    redirect_to books_url
  end

  private
  def set_book
      @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title,:author,:isbn,:text)
  end
end
