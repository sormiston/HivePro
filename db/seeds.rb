# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'
# require 'faker'

Band.destroy_all
User.destroy_all
Room.destroy_all

room_seed_file = File.read('./db/room_seed_data.json')
room_data_hash = JSON.parse(room_seed_file)
band_seed_file = File.read('./db/band_seed_data.json')
band_data_hash = JSON.parse(band_seed_file)

band_data_hash.each do |x|
  generate = Band.create(**x)
  p generate
end

room_data_hash.each do |x|
  generate = Room.create(**x)
  p generate
end

p "#{Band.count} bands created!"
p "#{Room.count} rooms created!"


# user_data_hash.each do |obj|
#   generate = User.create!({**obj})
#   p generate
# end