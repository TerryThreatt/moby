class BookSerializer < ActiveModel::Serializer
  attributes :id, :isbn, :title, :author, :genre
  has_many :discussions
  has_many :users, through: :discussions
end
