class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :text
      t.references :title, null: false, foreign_key: true

      t.timestamps
    end
  end
end
