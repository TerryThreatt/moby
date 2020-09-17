class Book < ApplicationRecord
    has_many :discussions
    has_many :users, through: :discussions
    valdidates :title, :author, :genre, presence: true
end
