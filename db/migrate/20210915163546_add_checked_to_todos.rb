class AddCheckedToTodos < ActiveRecord::Migration[6.1]
  def change
add_column :todos, :checked, :boolean
  end
end
