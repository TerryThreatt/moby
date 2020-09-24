class BookSerializer < ActiveModel::Serializer
  attributes :id, :isbn, :title, :author, :genre
  has_many :reviews
end
