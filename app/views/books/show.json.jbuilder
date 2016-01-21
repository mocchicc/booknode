json.array! [@book] do |book|
  json.extract! book,:id,:title,:depth,:edge
  json.nodes book.nodes do |node|
    json.extract! node,:parent_id,:child_id
  end
  json.contents book.contents do |content|
    json.extract! content,:id,:text,:order,:y
    json.partial! partial: 'books/content',locals:{content:content}
  end
end
