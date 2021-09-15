class Todo < ApplicationRecord
  belongs_to :title, inverse_of: :todos
end
