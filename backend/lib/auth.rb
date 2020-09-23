require 'jwt'

class Auth

    def self.create_token(user)
        exp = Time.now.to_i + 86400
        payload = { user: JSON.parse(user.to_json), exp: exp }
        token = JWT.encode(payload, ENV['APP_SECRET'], ENV['AUTH_ALGO'])
        decode_token(token)
    end

    def self.decode_token(token)
        decoded = JWT.decode(token, ENV['APP_SECRET'], true, { algorithm: ENV['AUTH_ALGO']})
    end
end