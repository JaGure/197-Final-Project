var Crypto = require('crypto-js')

// hashes the input password so that it can be stored in the database
const hashPassword = password => {
    hash = Crypto.SHA256(password)
    return hash.toString()
}

module.exports = {
    hashPassword: hashPassword
}