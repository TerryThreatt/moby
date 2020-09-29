class Book < ApplicationRecord
    has_many :reviews, dependent: :destroy
    validates :title, :author, presence: true
    accepts_nested_attributes_for :reviews 
end
