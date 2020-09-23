class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password
  has_many :discussions, dependent: :destroy
  has_many :books, through: :discussions
end
