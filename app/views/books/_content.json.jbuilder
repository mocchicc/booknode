json.children content.children do |child|
  json.extract! child,:id,:text,:order,:y
  json.partial! partial: 'books/content',locals:{content:child}
end
