# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160120212324) do

  create_table "books", force: :cascade do |t|
    t.string   "title",      limit: 255
    t.string   "image_url",  limit: 255
    t.string   "isbn",       limit: 255
    t.string   "author",     limit: 255
    t.integer  "depth",      limit: 4
    t.integer  "x",          limit: 4
    t.integer  "y",          limit: 4
    t.integer  "width",      limit: 4
    t.integer  "height",     limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.integer  "edge",       limit: 4
  end

  create_table "contents", force: :cascade do |t|
    t.string   "text",       limit: 255
    t.integer  "order",      limit: 4
    t.integer  "x",          limit: 4
    t.integer  "y",          limit: 4
    t.integer  "width",      limit: 4
    t.integer  "height",     limit: 4
    t.integer  "book_id",    limit: 4
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "nodes", force: :cascade do |t|
    t.integer  "parent_id",  limit: 4
    t.integer  "child_id",   limit: 4
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "book_id",    limit: 4
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "tag_id",        limit: 4
    t.integer  "taggable_id",   limit: 4
    t.string   "taggable_type", limit: 255
    t.integer  "tagger_id",     limit: 4
    t.string   "tagger_type",   limit: 255
    t.string   "context",       limit: 128
    t.datetime "created_at"
  end

  add_index "taggings", ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true, using: :btree
  add_index "taggings", ["taggable_id", "taggable_type", "context"], name: "index_taggings_on_taggable_id_and_taggable_type_and_context", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string  "name",           limit: 255
    t.integer "taggings_count", limit: 4,   default: 0
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

end
