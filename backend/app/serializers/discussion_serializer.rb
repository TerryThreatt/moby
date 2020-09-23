class DiscussionSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
  belongs_to :book
  belongs_to :user
  has_many :comments
end
