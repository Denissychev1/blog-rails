# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Title.create!([
  { text: 'title1' },
  { text: 'title2' },
  { text: 'title3' }
])
Todo.create!([
  { text: 'todo1', title_id: 1 },
  { text: 'todo2', title_id:2 },
  { text: 'todo3', title_id:3 },
  { text: 'todo4',title_id:1 }
])
