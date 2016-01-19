json.array! Book.all do |book|
  json.extract! book,:title,:depth,:edge
  json.contents book.contents do |content|
    json.extract! content,:id,:text,:order,:y
    json.partial! partial: 'books/content',locals:{content:content}
  end
end
