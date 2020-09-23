class User < ApplicationRecord
    has_many :discussions, dependent: :destroy
    has_many :books, through: :discussions
    has_secure_password
    validates :username, :email, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { in: 6..28 }
end