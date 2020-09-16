class User < ApplicationRecord
  has_secure_password
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'invalid email' }
  validates :password, length: {minimum: 6}
  
  belongs_to :band
end
