class Title < ApplicationRecord
has_many :todos,inverse_of: :title, class_name: "Todo"
end
