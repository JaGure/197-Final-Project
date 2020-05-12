const mongoose = require('mongoose')

const User = require('./user')
const Character = require('./character')

const groupSchema = new mongoose.Schema({
    groupName: { type: String },
    groupID: { type: String },
    users: { type: [User] }, 
    characters: { 
        type: Map, 
        of:  Character}, // map of users to characters
    DM: { type: User },    
})

module.exports = mongoose.model('Group', groupSchema)