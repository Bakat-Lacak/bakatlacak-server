const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET_KEY

function signToken (payload) {
    // syn
    return jwt.sign(payload,secretKey)
}

function verifyToken (token) {
    // syn
    return jwt.verify(token, secretKey)
}

module.exports = {
    signToken,
    verifyToken
}