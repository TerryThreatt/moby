class Book < ApplicationRecord
    has_many :reviews
    validates :title, :author, presence: true
end
