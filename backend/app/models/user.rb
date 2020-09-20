class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable
    has_many :discussions, dependent: :destroy
    has_many :books, through: :discussions
    has_secure_password
    validates :username, :email, :password, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { in: 6..20 }
end
