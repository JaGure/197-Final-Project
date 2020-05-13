const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    groupNames: { type: [String] },
    groupIDs: { type: [String] }
})

module.exports = {
    user: mongoose.model('User', userSchema),
    userSchema: userSchema
}