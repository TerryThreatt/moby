class Book < ApplicationRecord
    has_many :discussions
    has_many :users, through: :discussions
    validates :title, :author, presence: true
end
