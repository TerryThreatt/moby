class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :book_id, :body
  belongs_to :book
end
