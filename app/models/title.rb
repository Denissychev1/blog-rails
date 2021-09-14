class Title < ApplicationRecord
has_many :todos, class_name: "todos"
end
