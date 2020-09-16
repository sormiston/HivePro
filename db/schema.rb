# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_16_141358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "room_id", null: false
    t.datetime "booking_start"
    t.datetime "booking_end"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["room_id"], name: "index_appointments_on_room_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "bands", force: :cascade do |t|
    t.string "name"
    t.integer "num_members"
    t.string "font"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "appointments_id", null: false
    t.index ["appointments_id"], name: "index_bands_on_appointments_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.integer "sq_footage"
    t.string "hourly_rt"
    t.text "fixed_equipment"
    t.integer "max_cap"
    t.string "img_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "appointment_id", null: false
    t.index ["appointment_id"], name: "index_rooms_on_appointment_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.bigint "band_id", null: false
    t.string "email"
    t.string "password_digest"
    t.boolean "acct_holder"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["band_id"], name: "index_users_on_band_id"
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "appointments", "rooms"
  add_foreign_key "appointments", "users"
  add_foreign_key "bands", "appointments", column: "appointments_id"
  add_foreign_key "rooms", "appointments"
  add_foreign_key "users", "bands"
end
