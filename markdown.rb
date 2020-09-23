# frozen_string_literal: true

# given a markdown content convert it into
# function that will parse markdown headers written
# in ATX style and return
# the appropriate HTML output

# data

# content = <<-EOF
# # Hey there
# Some content
# # Another heading
# More content
# EO

# expected
# "<h1> Hey there</h1>\nSome content\n<h1>Another heading</h1>\nMore content\n"

# :psedo
# use gsub to identify sentence that start with #
# global substitute with a block will be in play
# search for sentence that start with #
# for each add a <h1></h1> to it
# use string interporation
# ignore the # at index 0 and the space at index 1
# start from index 2 to the last

# works for header 1 (#)and header 2(##)
def markdown_heading_parser(content)
  content.gsub(/^.*#.*/) { |heading| "<h1>#{heading[2..-1]}</h1>" }
end

content = <<~EOF
  # Hey there
  Some content
  # Another heading
  More content
EOF

content1 = <<~EOF
  ## Hey there

  Some content
  ## Another heading

  More content
EOF

puts markdown_heading_parser(content1)
