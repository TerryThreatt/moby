class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :discussion
    validates :body, presence: true
end
