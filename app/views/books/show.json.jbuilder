json.array! [@book] do |book|
  json.extract! book,:id,:title,:depth,:edge
  json.contents book.contents do |content|
    json.extract! content,:id,:text,:order,:y
    json.partial! partial: 'books/content',locals:{content:content}
  end
end
